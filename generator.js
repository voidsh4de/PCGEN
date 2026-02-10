
const psuList = [ 150, 250, 350, 450, 550, 650, 750, 850, 1000, 1200];

const gpuList = ["none/intergrated", "1080 ti", "rx 580", "5090 ti", "4070 ti super", "rx 9070 xt", "A750", "B580", "craigs list mystery gpu"];

const cpuList = ["Celeron D", "pentium 4", "ryzen 5 7600", "core Ultra 5 125H", "ryzen 7 9800x3d", "Core i9-14900KS", "Xeon E3-1270 v6"];

const ramList = [4, 8, 16, 32, 64, 128, 258, 512, 1024, 2048];


// pc gen
function choiceFromList(list) {
    const listLength = list.length;
    const randomFromLimit = Math.floor(Math.random() * listLength);
    return list[randomFromLimit];
}

function makeDictPc() {
    dict = {
        cpu: choiceFromList(cpuList),
        gpu: choiceFromList(gpuList),
        psu: choiceFromList(psuList),
        ram: choiceFromList(ramList)
    }
    return dict;
}

function formatPc() {
    const PC = makeDictPc();
    const pcString = `CPU: ${PC.cpu}, GPU: ${PC.gpu}, PSU: ${PC.psu}w, RAM: ${PC.ram}gb`
    console.log(pcString);
    return pcString;
}


formatPc();

//html bridge

function showResult(result) {
    document.getElementById("result").innerHTML = result;
}

function generateButton() {
    const computerGen = formatPc();
    showResult(computerGen)
}