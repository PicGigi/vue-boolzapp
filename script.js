new Vue({
    el:'#app',
    data:{
        contacts: [
            {
                name: 'Henri',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02LHLUHGEA-db9eaaddd1e6-512',
                visible: true,
                messages: [
                    {
                        time: '12:00',
                        message: 'Ciao Prof!',
                        status: 'sent',
                        window: false,
                    },
                    {
                        time: '12:15',
                        message: 'Domani c\'è lezione?',
                        status: 'sent',
                        window: false,
                    },
                    {
                        time: '12:30',
                        message: 'Si! Domani approfondiamo Vue',
                        status: 'received',
                        window: false,
                    }
                ],
            },
            {
                name: 'Francesco',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02SY08FBAB-e38560810027-512',
                visible: true,
                messages: [
                    {
                        time: '12:45',
                        message: 'Grazie per l\'aiuto nell\'esercizio di ieri!',
                        status: 'sent',
                        window: false,
                    },
                    {
                        time: '13:00',
                        message: 'Di nulla! Al prossimo ticket!',
                        status: 'received',
                        window: false,
                    },
                    {
                        time: '13:15',
                        message: 'Al prossimo ticket!',
                        status: 'sent',
                        window: false,
                    }
                ],
            },
            {
                name: 'Domenico',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U0362DFPC5U-26be495585eb-512',
                visible: true,
                messages: [
                    {
                        time: '13:30',
                        message: 'Ho caricato il recap di ieri su Drive.',
                        status: 'received',
                        window: false,
                    },
                    {
                        time: '13:45',
                        message: 'Grazie vado subito a guardarlo!',
                        status: 'sent',
                        window: false,
                    },
                    {
                        time: '14:00',
                        message: 'Prego!',
                        status: 'received',
                        window: false,
                    }
                ],
            },
            {
                name: 'Adriano',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U01ACLWHWMT-5300b63df393-512',
                visible: true,
                messages: [
                    {
                        time: '14:15',
                        message: 'Mi dispiace ma ho deciso di lasciare Boolean..',
                        status: 'sent',
                        window: false,
                    },
                    {
                        time: '14:30',
                        message: 'Questo esercizio è troppo difficile..',
                        status: 'sent',
                        window: false,    
                    },
                    {
                        time: '14:45',
                        message: 'Forza e coraggio! Ce la puoi fare!',
                        status: 'received',
                            window: false,
                    }
                ],
            },
            {
                name: 'Eugenia',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02JZ1TSZ0U-4054f2f77576-512',
                visible: true,
                messages: [
                    {
                        time: '15:00',
                        message: 'Ciao, non è ancora arrivata la mia bag di Boolean..',
                        status: 'sent',
                            window: false,
                    },
                    {
                        time: '15:15',
                        message: 'Non preoccuparti, la tua paperella sta arrivando!',
                        status: 'received',
                        window: false,
                    }
                ],
            },
            {
                name: 'Heric',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02LHLUHGEA-db9eaaddd1e6-512',
                visible: true,
                messages: [
                    {
                        time: '12:00',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received',
                        window: false,    
                    },
                ],
            },
            {
                name: 'Francis',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02SY08FBAB-e38560810027-512',
                visible: true,
                messages: [
                    {
                        time: '12:00',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received',
                        window: false,    
                    },
                ],
            },
            {
                name: 'Dominik',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U0362DFPC5U-26be495585eb-512',
                visible: true,
                messages: [
                    {
                        time: '12:00',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received',
                        window: false,    
                    },
                ],
            },
            {
                name: 'Adam',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U01ACLWHWMT-5300b63df393-512',
                visible: true,
                messages: [
                    {
                        time: '12:00',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received',
                        window: false,    
                    },
                ],
            },
            {
                name: 'Ermenegilda',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02JZ1TSZ0U-4054f2f77576-512',
                visible: true,
                messages: [
                    {
                        time: '12:00',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received',
                        window: false,    
                    },
                ],
            },
        ],
        currentChat: 0,
        newMsg: '',
        research: '',
        openClose: true,
    },
    methods: {
        selectedChat(index){
            this.currentChat = index;
        },
        sendMsg(){
            if(this.newMsg.trim()) {
                let newObjMsg = {
                    time: this.getTime(),
                    message: this.newMsg.trim(),
                    status: 'sent',
                    window: false,
                }
                this.contacts[this.currentChat].messages.push(newObjMsg);
                this.newMsg = '';

                setTimeout(this.receiveMsg, 1000);
            }
        },
        receiveMsg(){
            let newObjMsg = {
                time: this.getTime(),
                message: 'Ok',
                status: 'received',
                window: false,
            }
            this.contacts[this.currentChat].messages.push(newObjMsg);
        },
        searchContact(){
            for(let i=0; i<this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.research.toLowerCase())){
                    this.contacts[i].visible = true
                }
                else{
                    this.contacts[i].visible = false
                }
            }
        },
        openMenu(indexdue){
            this.contacts[this.currentChat].messages[indexdue].window = !this.contacts[this.currentChat].messages[indexdue].window
        },
        deleteMsg(indexdue){
            this.contacts[this.currentChat].messages.splice(indexdue, 1)
        },
        getTime(){
            var DateTime = luxon.DateTime;
            const dt = DateTime.now()
            let timeHour = dt.hour;
            if(timeHour<10){
                timeHour = `0${timeHour}`
            }
            let timeMinute = dt.minute;
            if(timeMinute<10){
                timeMinute = `0${timeMinute}`
            }
            let lastMsgTime = `${timeHour}:${timeMinute}`;
            return lastMsgTime
        }
    }
})