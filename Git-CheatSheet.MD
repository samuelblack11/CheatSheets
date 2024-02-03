# Configuration
git config --global user.name "Your Name"    # Set your name
git config --global user.email "youremail@example.com"  # Set your email

# Repository Operations
git init                    # Initialize a new git repository
git clone url               # Clone a repository from a URL

# Basic Commands
git status                  # Show the working tree status
git add filename            # Add a file to the staging area
git commit -m "message"     # Commit changes with a message
git push                    # Push commits to a remote repository
git pull                    # Fetch from and integrate with another repository or a local branch

# Branching and Merging
git branch                  # List branches
git branch name             # Create a new branch
git checkout name           # Switch to a branch
git merge name              # Merge a branch into the active branch

# Create a new repository on the command line
echo "# RepoName" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:username/RepoName.git
git push -u origin main