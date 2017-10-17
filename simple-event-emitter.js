const EventEmitter = require('events');

class SimpleEventEmitter extends EventEmitter
{
    constructor(interval)
    {
        super();
        this._currentValue = 0;
        this._interval = interval ? interval : 1000;
        this._beginEmittingEvents();
    }

    _beginEmittingEvents()
    {
        setInterval(() => {
            this._emitEvents();
        }, this._interval);
    }

    _emitEvents()
    {
        this.emit('all', this._currentValue);

        if (this._currentValue % 2 === 0)
        {
            this.emit('even', this._currentValue);
        }
        else
        {
            this.emit('odd', this._currentValue);
        }

        this._currentValue++;
    }
}

module.exports = SimpleEventEmitter;