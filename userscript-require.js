if (typeof define != 'function') {
    eval(GM_getResourceText('require') || GM_getResourceText('requirejs'));
}
if (typeof define === 'function') {    
    let req = require;
    req.load = (context, moduleName, url) => {
        function _define (deps, callback) {
            define(moduleName, deps, callback);
        }
        Object.defineProperty(_define, 'amd', { get: () => define.amd });
        ((define) => {
            const schim = context.config.shim[moduleName];
            let _exports = ''; 
            if (schim && schim.exports) {
                _exports = ';' + schim.exports + ';';
            }
            let exportsValues = req.exec(GM_getResourceText(moduleName) + _exports);
            if (_exports && exportsValues) {
                define([] , () => exportsValues);
            }
            context.completeLoad(moduleName);
        })(_define);
    }
}
