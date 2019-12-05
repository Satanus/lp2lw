# lp2lw
Import passwords from LastPass to Firefox Lockwise

# How to use

- Export your passwords from Lastpass to a csv file
  - via [Lastpass](https://lastpass.com/export.php) website
  - via Lastpass extension: click the extension -> account options -> advanced -> export -> csv
- Go to `about:logins` in Firefox
- Run [import.js](https://github.com/Satanus/lp2lw/blob/master/import.js) in your console

- ![script img](https://i.imgur.com/Pg77Clv.png)
  - Click browse or drag and drop your exported csv to the browse button
  - Click import

entries with new lines in the notes, blank passwords, secure notes and such may cause issues. it's up to you to clean your own file!

this is a quick script I made to import my data. this can be tweaked for any csv file!
