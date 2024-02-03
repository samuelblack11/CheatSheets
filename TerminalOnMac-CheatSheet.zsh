# Basic Navigation
pwd                     # Print working directory
cd ~                    # Change directory to your home directory
cd /path/to/directory   # Change to a specific directory
cd ..                   # Move up one directory
ls                      # List files and directories in the current directory
ls -l                   # Long listing including file permissions, number of links, owner, group, size, and timestamp
ls -a                   # List all entries including hidden files

#File & Directory Ops
mkdir directory_name    # Create a new directory
rmdir directory_name    # Remove an empty directory
rm filename             # Remove a file (use cautiously)
rm -r directory_name    # Recursively remove a directory and its contents
touch filename          # Create a new file or update the timestamp of an existing file
cp source destination   # Copy files or directories
mv source destination   # Move or rename files or directories

# Viewing & Editing Files
cat filename            # Display file content
less filename           # View file content page by page
open filename           # Open a file with the default application
nano filename           # Edit file using the nano editor

# Permissions & Ownership
chmod 755 filename      # Change the permissions of a file or directory
chown user:group filename  # Change the owner and group of a file or directory
