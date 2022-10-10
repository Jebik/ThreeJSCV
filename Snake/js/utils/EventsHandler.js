export default class EventsHandler {
    constructor() 
    {
        this.listeners = new Map();
        this.triggerdLabels = new Map();
    }

    on(label, callback) {
        this.listeners.has(label) || this.listeners.set(label, []);
        this.listeners.get(label).push(callback);
    }

    off(label) 
    {
        this.listeners.delete(label);
    }

    trigger(label, ...args) 
    {
        let res = false;
        this.triggerdLabels.set(label, ...args);
        let _trigger = (inListener, label, ...args) => 
        {
            let listeners = inListener.get(label);
            if (listeners && listeners.length) 
            {
                listeners.forEach((listener) => 
                {
                    if(label == 'dir')
                    {
                        console.log(listener)
                    }
                    listener(...args);
                });
                res = true;
            }
        };
        _trigger(this.listeners, label, ...args);
        return res;
    }
}