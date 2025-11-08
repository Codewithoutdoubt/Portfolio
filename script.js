function buildTxt() { 
    return `Deepak Vishwakarma\nFull-Stack Java Developer (Trainee)\nEmail: deepakvishwakarma1503@gmail.com\nPhone: +91-7415403486\nLinkedIn: linkedin.com/in/deepak-vishwakarma-2a34481a2\nGitHub: github.com/Codewithoutdoubt\nSummary: Full-stack Java developer trained in Spring Boot and MySQL.` }

function downloadTxt() { 
    const b = new Blob([buildTxt()], 
    { type: 'text/plain' }); 
    const u = URL.createObjectURL(b); 
    const a = document.createElement('a'); 
    a.href = u; 
    a.download = 'Deepak_Vishwakarma_Resume.txt'; 
    document.body.appendChild(a); 
    a.click(); 
    a.remove(); 
    URL.revokeObjectURL(u); 
}
