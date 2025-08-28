// Auto-commit script for GitMorph
const fs = require('fs');
const path = require('path');

// Embedded settings
const settings = {
  "id": "mycommit_testing_1756369859334",
  "name": "testing",
  "repository": "mycommit",
  "commitSchedule": {
    "2025-08-28": 4,
    "2025-08-29": 5,
    "2025-08-30": 1,
    "2025-08-31": 5,
    "2025-09-01": 1,
    "2025-09-02": 3,
    "2025-09-03": 1
  },
  "repeatMonthly": false,
  "commitsCompleted": {},
  "totalCommitsScheduled": 20,
  "commitsCompletedCount": 0,
  "timestamp": "2025-08-28T08:30:59.334Z",
  "active": true,
  "status": "active",
  "userId": "WPxPQmjoRcVULpuwRvhdkoA4uxn2"
};

async function main() {
    try {
        console.log('Starting auto-commit process...');
        console.log('Settings:', JSON.stringify(settings, null, 2));
        
        const timestamp = new Date().toISOString();
        const fileName = `commit-${timestamp.replace(/[:.]/g, '-')}.txt`;
        
        // Create a more meaningful commit file
        const content = `Commit generated at ${timestamp}
Activity metric: ${Math.floor(Math.random() * 100)}
Commit Message: ${settings.commitMessage || 'Auto commit'}
Process: ${settings.name || 'Unknown'}
Repository: ${settings.repository || 'Unknown'}
Process ID: ${settings.id || 'Unknown'}
User Agent: GitMorph Auto-Commit Bot
Commit Type: Scheduled
`;
        
        // Ensure we can write to the current directory
        const currentDir = process.cwd();
        console.log('Current directory:', currentDir);
        
        const filePath = path.join(currentDir, fileName);
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log('Created file:', filePath);
        console.log('Process ID:', settings.id);
        console.log('Commit completed for process:', settings.name);
        
        // Verify file was created
        if (fs.existsSync(filePath)) {
            const fileSize = fs.statSync(filePath).size;
            console.log(`File created successfully, size: ${fileSize} bytes`);
        } else {
            throw new Error('File was not created successfully');
        }
        
        console.log('Auto-commit process completed successfully');
    } catch (error) {
        console.error('Error in auto-commit process:', error);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
}

main().catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
});