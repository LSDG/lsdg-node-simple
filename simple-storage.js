class SimpleStorage
{
    constructor()
    {
        this.data = {};
    }

    setValue(key, value)
    {
        this.data[key] = value;
        return value;
    }

    getValue(key)
    {
        return this.data[key];
    }
}

module.exports = SimpleStorage;