function generateLink() {
    const driveUrl = document.getElementById('driveUrl').value;
    const folderId = extractFolderId(driveUrl);
    
    if (!folderId) {
        alert("कृपया सही Google Drive फोल्डर URL डालें!");
        return;
    }

    const websiteLink = `${window.location.href}viewer.html?folderId=${folderId}`;
    
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('websiteLink').value = websiteLink;
    document.getElementById('visitLink').href = websiteLink;
}

function extractFolderId(url) {
    const regex = /\/folders\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function copyLink() {
    const copyText = document.getElementById('websiteLink');
    copyText.select();
    document.execCommand('copy');
    alert("लिंक कॉपी हो गया!");
}
