function analyzeURL(url){
console.log("Analyzing:",url);
}

analyzeURL("https://google.com");

function parseURL(inputURL) {

    const parsed = new URL(inputURL);

    console.log("Protocol:", parsed.protocol);
    console.log("Domain:", parsed.hostname);
    console.log("Path:", parsed.pathname);
}

parseURL("https://google.com/search?q=test");

function analyzeURL(inputURL) {

    const parsed = new URL(inputURL);

    let riskScore = 0;

    if (parsed.protocol === "http:") {
        riskScore += 10;
        console.log("Risk: HTTP protocol used (+10)");
    }

    console.log("Total Risk Score:", riskScore);
}

analyzeURL("http://example.com");
