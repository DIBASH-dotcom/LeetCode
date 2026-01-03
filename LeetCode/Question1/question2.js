function  CreateGreeter () {
    return function () {
        return "Hello  Dibash";
    };


    const myFunc =CreateGreeter();
    console.log(myFunc());
}