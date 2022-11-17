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
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Prof!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Domani c\'è lezione?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Si! Domani approfondiamo Vue',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Francesco',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02SY08FBAB-e38560810027-512',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Grazie per l\'aiuto nell\'esercizio di ieri!',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Di nulla! Al prossimo ticket!',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Al prossimo ticket!',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Domenico',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U0362DFPC5U-26be495585eb-512',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'Ho caricato il recap di ieri su Drive.',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Grazie vado subito a guardarlo!',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Prego!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Adriano',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U01ACLWHWMT-5300b63df393-512',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Mi dispiace ma ho deciso di lasciare Boolean..',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Questo esercizio è troppo difficile..',
                        status: 'sent'
                        },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Forza e coraggio! Ce la puoi fare!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Eugenia',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02JZ1TSZ0U-4054f2f77576-512',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, non è ancora arrivata la mia bag di Boolean..',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non preoccuparti, la tua paperella sta arrivando!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Heric',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02LHLUHGEA-db9eaaddd1e6-512',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received'
                        },
                ],
            },
            {
                name: 'Francis',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02SY08FBAB-e38560810027-512',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received'
                        },
                ],
            },
            {
                name: 'Dominik',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U0362DFPC5U-26be495585eb-512',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received'
                        },
                ],
            },
            {
                name: 'Adam',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U01ACLWHWMT-5300b63df393-512',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received'
                        },
                ],
            },
            {
                name: 'Ermenegilda',
                avatar: 'https://ca.slack-edge.com/T91QPE3BP-U02JZ1TSZ0U-4054f2f77576-512',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao sono solo una prova per vedere se funziona la search bar!',
                        status: 'received'
                        },
                ],
            },
        ],
        currentChat: 0,
        newMsg: '',
        research: '',
    },
    methods: {
        selectedChat(index){
            this.currentChat = index;
        },
        sendMsg(){
            if(this.newMsg.trim()) {
                let newObjMsg = {
                    date: 'da vedere',
                    message: this.newMsg.trim(),
                    status: 'sent',
                }
                this.contacts[this.currentChat].messages.push(newObjMsg);
                this.newMsg = '';

                setTimeout(this.receiveMsg, 1000);
            }
        },
        receiveMsg(){
            let newObjMsg = {
                date: 'da vedere',
                message: 'Ok',
                status: 'received',
            }
            this.contacts[this.currentChat].messages.push(newObjMsg);
        },
        searchContact(){
            for(let i=0; i<this.contacts.length; i++){
                if(this.research === this.contacts[i].name.slice(0, this.research.length)){
                    this.contacts[i].visible = true
                }
                else{
                    this.contacts[i].visible = false
                }
            }
        }
    }
})