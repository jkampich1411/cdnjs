class Parameter {
    constructor(parameter, url = window.location.href) {
        this.param = parameter;
        this.href = url;
    }

    get get() {
        return this.parameter(this.param, this.href);
    }

    parameter(par, url) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
}