// The 'run' function is called by LaunchBar when the user opens the action.
function run()
{
    // No argument passed, just open the website:
    LaunchBar.openURL('http://www.uptodate.com/contents/search');
}

// The 'runWithString' function is called by LaunchBar when the user opens the action with a string argument.
function runWithString(argument)
{
    LaunchBar.openURL('http://www.uptodate.com/contents/search?search=' + encodeURIComponent(argument));
}
