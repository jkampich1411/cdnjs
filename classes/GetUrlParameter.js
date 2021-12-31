class Parameter {
    constructor(parameter, url = window.location.href) {
        this.param = parameter || null;
        this.href = url || null;
    }

    get get(parameter, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
}