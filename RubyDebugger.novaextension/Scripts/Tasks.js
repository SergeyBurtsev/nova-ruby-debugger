class RubyDebuggerTasksAssistant {
    resolveTaskAction(context) {
        let config = context.config;

        let action = new TaskDebugAdapterAction("rdbg")
        action.adapterStart = "attach"
        action.debugRequest = "attach"
        action.debugArgs = {
            "localfs": true
        }
        action.transport = "socket"
        action.sockerHost = config.get("rdbg.host", "string")
        action.socketPort = config.get("rdbg.port", "number")
        return action
    }
}

module.exports = new RubyDebuggerTasksAssistant()
