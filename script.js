// ------------------------ NEW CODE

class Stopwatch extends React.Component {
    constructor () {
        super();
        this.state = {
            running: false,
            display: document.getElementById('stopwatch-display'),
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0    
            }
        }
        this.reset = this.reset.bind(this)
    }

    reset() {
        this.setState({
            running: false,
            display: document.getElementById('stopwatch-display'),
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0    
            }
        })
    }

    print() {
        this.state.display.innerText = this.format(this.state.times);
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    calculate() {
        this.setState({
            running: true,
            display: document.getElementById('stopwatch-display'),
            times: {
                minutes: this.state.times.minutes,
                seconds: this.state.times.seconds,
                miliseconds: this.state.times.miliseconds+=1    
            }
        })
        //this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
    }

    format () {
        let pad0 = function(value) {
            let result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
        return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
	}    

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    render() {
        return (
            React.createElement ('div', {className: 'container'},
                React.createElement ('div', {className: 'controls bigBtns'},
                    React.createElement('a', {onClick: this.start.bind(this), className: 'button start', href:'#'}, 'Start'),
                    React.createElement('a', {onClick: this.stop.bind(this), className: 'button stop', href:'#'}, 'Stop'),
                    React.createElement('a', {onClick: this.reset.bind(this), className: 'button', href:'#'}, 'Reset'),
                    ),
                React.createElement('div', {id: 'stopwatch-display'}, this.format()),
            )
        )
        
    };
};

class App extends React.Component {
    render() {
        return React.createElement(Stopwatch)
    }
}

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById("stopwatch"));

// ------------------ OLD CODE

/*class Stopwatch {

    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.running = false;
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.print();
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

let saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => {
    console.log(stopwatch.times);
    let ul = document.getElementById('results');
    let li = document.createElement('li');
    li.innerHTML = 
        `${stopwatch.times.minutes}:${stopwatch.times.seconds}:${stopwatch.times.miliseconds}`
    ul.appendChild(li);
});

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    let ul = document.getElementById('results');
    ul.innerHTML = ''
});*/


