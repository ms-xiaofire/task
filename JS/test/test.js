var fsm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'Melt', from: 'solid', to: 'liquid'},
        {name: 'Vaporize', from: 'liquid', to: 'gas'},
        {name: 'Condense', from: 'gas', to: 'liquid'},
        {name: 'Freeze', from: 'liquid', to: 'solid'}
    ],
    methods: {
        onBeforeMelt:         function() { /* ... */ },
        onBeforeVaporize:     function() { /* ... */ },
        onBeforeCondense:     function() { /* ... */ },
        onBeforeFreeze:       function() { /* ... */ },
        onLeaveSolid:         function() { /* ... */ },
        onLeaveLiquid:        function() { /* ... */ },
        onLeaveGas:           function() { /* ... */ },
        onEnterLiquid:        function() { /* ... */ },
        onEnterGas:           function() { /* ... */ },
        onEnterSolid:         function() { /* ... */ },
        onAfterMelt:          function() { /* ... */ },
        onAfterVaporise:      function() { /* ... */ },
        onAfterCondense:      function() { /* ... */ }
        onAfterFreeze:        function() { /* ... */ }
    }

});
//方法调用
//1，自执行方法：
fsm.onMelt();
fsm.onVaporize();
fsm.onCondense();
fsm.onFreeze();

//1、触发调用方式：
fsm.Melt();
fsm.Vaporize();
fsm.Condense();
fsm.Freeze();
