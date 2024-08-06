
Object.prototype.getFromPath = function(path) {
    const spPath = path.split('.')
    let p=this;
    for(let i=0; i<spPath.length; i++){
        try {p=p[spPath[i]]}
        catch(e) { p=undefined }
    }
    return p;
}
