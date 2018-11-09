if (typeof define != 'function') {
    eval(GM_getResourceText('require') || GM_getResourceText('requirejs'));
}
if (typeof define === 'function') {    
    require.load = (context, moduleName, url) => {
        function _define (deps, callback) {
            define(moduleName, deps, callback);
        }
        Object.defineProperty(_define, 'amd', { get: () => define.amd });
        ((define) => {
            eval(GM_getResourceText(moduleName));
            context.completeLoad(moduleName);
        })(_define);
    }
}
