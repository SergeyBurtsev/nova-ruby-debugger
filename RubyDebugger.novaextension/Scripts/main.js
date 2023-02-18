const Tasks = require("Tasks.js");
nova.assistants.registerTaskAssistant(Tasks, {
    identifier: "ruby-debugger",
    name: "Ruby Debugger"
});

nova.workspace.onDidEndDebugSession((debugSession) => {
    debugSession.sendRequest("disconnect", { terminateDebuggee: false })
});

