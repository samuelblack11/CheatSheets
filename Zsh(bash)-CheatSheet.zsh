# Navigation & History
history                 # Display command history
cd -                    # Change to the previous directory

# File Manipulation
open .                  # Open the current directory in Finder

# Zsh-Specific Features
autoload -Uz compinit && compinit   # Initialize completion system
setopt NO_CASE_GLOB                 # Case insensitive globbing

# Customization
Bash: Customize your environment in ~/.bash_profile or ~/.bashrc.
Zsh: Customize your environment in ~/.zshrc.

# Aliases
alias ll='ls -l'        # Create an alias for 'ls -l'

# Additional Notes for Zsh
Zsh includes many user-friendly features like improved tab completion, spell correction, and theme support through frameworks like Oh My Zsh.
To switch your shell back to Bash from Zsh, you can use chsh -s /bin/bash. Use chsh -s /bin/zsh to switch back to Zsh.