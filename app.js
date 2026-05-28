const searchParseConfig = { serverId: 9308, active: true };

const searchParseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_9308() {
    return searchParseConfig.active ? "OK" : "ERR";
}

console.log("Module searchParse loaded successfully.");