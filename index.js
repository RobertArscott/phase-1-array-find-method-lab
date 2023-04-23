function superbowlWin(record){
    function check(element) {
        return (element.result === "W");
    }
    const thing = record.find(check);
    if (thing === undefined) {
        return undefined;
    }
    else {
        return thing["year"];
    }
}
