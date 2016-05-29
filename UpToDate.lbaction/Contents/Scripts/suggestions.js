function runWithString(argument)
{
    var result = HTTP.getJSON('http://www.uptodate.com/services/AutoComplete?prefix=' + encodeURIComponent(argument), 3);

    if (result == undefined) {
        LaunchBar.log('HTTP.getJSON() returned undefined');
        return [];
    }
    if (result.error != undefined) {
        LaunchBar.log('Error in HTTP request: ' + result.error);
        return [];
    }

    try {
		var termList = result.data.termList;
        var suggestions = [];
        for (var term in termList) {
            suggestions.push({
                             'title' : termList[term].term,
                             'icon' : 'UpToDate.png'
                             });
        }
        return suggestions;
    } catch (exception) {
        LaunchBar.log('Exception while parsing result: ' + exception);
        return [];
    }
}
