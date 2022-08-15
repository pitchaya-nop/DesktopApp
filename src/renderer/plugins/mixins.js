
import Vue from 'vue';
import moment from 'moment'
const Realm = require("realm");

const CarSchema = {
    name: "Car",
    properties: {
        make: "string",
        model: "string",
        miles: { type: "int", default: 0 },
    },
};
const PersonSchema = {
    name: "Person",
    properties: {
        name: "string",
        birthday: "date",
        cars: "Car[]",
        picture: "data?", // optional property
    },
};

const UserSchema = {
    name: "USER",
    properties: {
        accepttermcondition: "bool",
        addbyid: "bool",
        addbyphone: "bool",
        autoaddfriend: "bool",
        avatar: "string",
        avatars: "USER_IMAGE",
        birthday: "string",
        countrycode: "string",
        createdtime: "string",
        dialcode: "string",
        displayname: "string",
        email: "string",
        emailverify: "bool",
        fromstranger: "bool",
        gender: "string",
        gochatid: "string",
        id: "string",
        isblock: "bool",
        isfavorite: "bool",
        isfriend: "bool",
        ishide: "bool",
        language: "string",
        mobile: "string",
        onlinetime: "string",
        qrcode: "string",
        relationtime: "string",
        rename: "string",
        seenonline: "string",
        statusmessage: "string",
        updatedtime: "string",
        verifiedtime: "string",
    }
}
const ImageSchema = {
    name: "USER_IMAGE",
    properties: {
        thumbnail: 'string',
        source: 'string',
        medium: 'string',
        combiner: { type: 'linkingObjects', objectType: 'USER', property: 'avatars' }
    }
}
const OfficialSchema = {
    name: "OFFICIAL",
    properties: {
        adminuserids: "string[]",
        companyemail: "string",
        companyname: "string",
        createdtime: "string",
        displayname: "string",
        friendcount: "int",
        gochatid: "string",
        id: "string",
        package: "string",
        role: "string",
        updatedtime: "string",
        avatars: "OFFICIAL_IMAGE",

    }
}
const ImageOfficialSchema = {
    name: "OFFICIAL_IMAGE",
    properties: {
        thumbnail: 'string',
        source: 'string',
        medium: 'string',
        combiner: { type: 'linkingObjects', objectType: 'OFFICIAL', property: 'avatars' }
    }
}
const RoomSchema = {
    name: "ROOM",
    properties: {
        isshow: 'bool',
        showtime: 'string',
        roomtype: 'string',
        isblock:'bool',
        idofficialroom: 'string',
        unreadcount: 'int',
        lastmessage: "string",
        admincount: 'int',
        adminUserIds: 'string[]',
        allowlinkinvite: 'bool',
        allowuserinvite: 'bool',
        createdtime: 'string',
        deletedtime: 'string',
        groupavatar: "IMAGEROOM",
        groupname: 'string',
        groupstatusmessage: 'string',
        id: 'string',
        invitelink: 'string',
        isfavorite: 'bool',
        ishidden: 'bool',
        ismarkasunread: 'bool',
        ismute: 'bool',
        ispin: 'bool',
        membercount: 'int',
        memberuserids: 'string[]',
        owneruserid: 'string',
        pendingcount: 'int',
        pendinguserids: 'string[]',
        permission: 'string',
        pinmessage: 'string[]',
        sessionid: 'string',
        sessionname: 'string',
        sessiontype: 'string',
        uniqueids: 'string[]',
        updatedtime: 'string',
        userids: 'string[]',
        user: "USERROOM"
    },
}
const ImageroomSchema = {
    name: "IMAGEROOM",
    properties: {
        medium: 'string',
        source: 'string',
        thumbnail: 'string',
        combiner: { type: 'linkingObjects', objectType: 'ROOM', property: 'groupavatar' }
    }
}
const UserroomSchema = {
    name: 'USERROOM',
    properties: {
        avatar: "string",
        dialCode: "string",
        displayName: "string",
        id: "string",
        mobile: "string",
        permission: "string",
        rename: "string",
        combiner: { type: 'linkingObjects', objectType: 'ROOM', property: 'user' }
    }
}

const MessageSchema = {
    name: "MESSAGE",
    properties: {
        id: "string",
        groupmessageid: "string",
        sessionid: "string",
        messageid: "string",
        referencekey: "string",
        senderid: "string",
        oaid: "string",
        displayname: "string",
        avatar: "string",
        rename: "string",
        readCount: 'int',
        contenttype: "string",
        content: "string",
        media: 'MEDIA[]',
        dummyfile: 'FILEDUMMY[]',
        cancelmessage: 'bool',
        strangermessage: 'bool',
        blockmessage: 'bool',
        status: "string",
        destructtime: "int",
        disappeartime: "string",
        replymsgId: "string",
        uniqueids: "string[]",
        createdtime: "string",
        updatedtime: "string"
    }


}
const MediaMessageSchema = {
    name: 'MEDIA',
    properties: {
        id: "string",
        imageSource: "string",
        imageMedium: "string",
        imageThumbnail: "string",
        type: "string",
        mediaRefKey: "string",
        width: 'int',
        height: 'int',
        cancelMedia: 'bool',
        createdTime: 'string',
        indexMedia: 'int',
        timeStamp: 'int',
        combiner: { type: 'linkingObjects', objectType: 'MESSAGE', property: 'media' }
    }
}
const FileDummySchema = {
    name: 'FILEDUMMY',
    properties: {
        combiner: { type: 'linkingObjects', objectType: 'MESSAGE', property: 'dummyfile' }
    }
}

Vue.mixin({
    computed: {

        getdataDB: function () {
            return Realm.open({ schema: [UserSchema, ImageSchema, RoomSchema, ImageroomSchema, UserroomSchema, MessageSchema, MediaMessageSchema, FileDummySchema, OfficialSchema, ImageOfficialSchema] }).then(
                (realm) => {
                    return realm

                }
            )

        },
        getCurrentTime: function () {
            const currenttime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            return currenttime
        },
        getProfile: function () {
            const profile = this.$store.getters['auth/profile']
            return profile
        },
        getToken: function () {
            const token = this.$store.getters['auth/token']
            return token
        }
    },
    methods: {
        setMessage(session) {
            this.getdataDB.then((data) => {
                let lastshowtime = data
                    .objects("ROOM")
                    .filtered(`sessionid == "${session}"`);
                let msg = data
                    .objects("MESSAGE")
                    .filtered(
                        `sessionid == "${session}" AND  createdtime <= "${lastshowtime[0].showtime}"`
                    );
                let arr = [];
                let testarr = [];
                if (msg.length < this.$store.state.chat.messagelength) {
                    this.$store.dispatch("chat/setChat", msg);
                } else {
                    for (let i = msg.length - 1; i > msg.length - this.$store.state.chat.messagelength; i--) {
                        arr.push(msg[i]);
                    }
                    this.$store.dispatch("chat/setChat", arr.reverse());
                }

            })

        },
        setContact() {
            this.getdataDB.then((data) => {
                let contact = data.objects("USER")
                this.$store.dispatch("contact/setContact", contact)
            })
        },
        setRooms() {
            this.getdataDB.then((data) => {
                // console.log(this.$store.state.auth.profile.id);
                // AND owner == "${this.$store.state.auth.profile.id}"
                let room
                if (this.$store.state.room.roomtype == 'official') {
                    room = data.objects("ROOM").filtered(`isshow == true AND roomtype == "${this.$store.state.room.roomtype}" AND idofficialroom =="${this.getProfile.id}"`).sorted('showtime', true)
                } else {
                    room = data.objects("ROOM").filtered(`isshow == true AND roomtype == "${this.$store.state.room.roomtype}"`).sorted('showtime', true)
                }
                this.$store.dispatch("room/setRoom", room)
            })
        },
        setOfficial() {
            this.getdataDB.then((data) => {
                let official = data.objects("OFFICIAL")
                this.$store.dispatch("official/setOfficial", official)
            })
        },
        addDataToRealm(data, action) {
            Realm.open({ schema: [UserSchema, ImageSchema, RoomSchema, ImageroomSchema, UserroomSchema, MessageSchema, MediaMessageSchema, FileDummySchema, OfficialSchema, ImageOfficialSchema] })
                .then((realm) => {
                    switch (action) {
                        case 'addUser':
                            data.map((item) => {
                                realm.write(() => {
                                    realm.create('USER', {
                                        accepttermcondition: item.acceptTermCondition,
                                        addbyid: item.addById,
                                        addbyphone: item.addByPhone,
                                        autoaddfriend: item.autoAddFriend,
                                        avatar: item.avatar,
                                        avatars: {
                                            medium: item.avatars.medium,
                                            source: item.avatars.source,
                                            thumbnail: item.avatars.thumbnail,
                                        },
                                        birthday: item.birthday,
                                        countrycode: item.countryCode,
                                        createdtime: item.createdTime,
                                        dialcode: item.dialCode,
                                        displayname: item.displayName,
                                        email: item.email,
                                        emailverify: item.emailVerify,
                                        fromstranger: item.fromStranger,
                                        gender: item.gender,
                                        gochatid: item.gochatId,
                                        id: item.id,
                                        isblock: item.isBlock,
                                        isfavorite: item.isFavorite,
                                        isfriend: item.isFriend,
                                        ishide: item.isHide,
                                        language: item.language,
                                        mobile: item.mobile,
                                        onlinetime: item.onlineTime,
                                        qrcode: item.qrCode,
                                        relationtime: item.relationTime,
                                        rename: item.rename,
                                        seenonline: item.seenOnline,
                                        statusmessage: item.statusMessage,
                                        updatedtime: item.updatedTime,
                                        verifiedtime: item.verifiedTime,
                                    })
                                })
                            })
                            break;
                        case 'addOfficial':
                            data.map((item) => {

                                realm.write(() => {
                                    realm.create('OFFICIAL', {
                                        adminuserids: item.adminUserIds,
                                        companyemail: item.companyEmail,
                                        companyname: item.companyName,
                                        createdtime: item.createdTime,
                                        displayname: item.displayName,
                                        friendcount: item.friendCount,
                                        gochatid: item.gochatId,
                                        id: item.id,
                                        package: item.package,
                                        role: item.role,
                                        updatedtime: item.updatedTime,
                                        avatars: {
                                            thumbnail: item.avatars.thumbnail ? item.avatars.thumbnail : 'null',
                                            source: item.avatars.source ? item.avatars.source : 'null',
                                            medium: item.avatars.medium ? item.avatars.medium : 'null',
                                        },
                                    })
                                })

                            })
                            break;
                        case 'addRooms':
                            data.map((item) => {
                                realm.write(() => {
                                    realm.create('ROOM', {
                                        isshow: item.roomtype == 'official' ? true : false,
                                        showtime: item.createdTime ? item.createdTime : '',
                                        roomtype: item.roomtype,
                                        idofficialroom: item.idofficialroom ? item.idofficialroom : 'null',
                                        unreadcount: 0,
                                        lastmessage: "",
                                        isblock:false,
                                        admincount: item.adminCount,
                                        adminUserIds: item.adminUserIds ? item.adminUserIds : [],
                                        allowlinkinvite: item.allowLinkInvite,
                                        allowuserinvite: item.allowUserInvite,
                                        createdtime: item.createdTime,
                                        deletedtime: item.deletedTime ? item.deletedTime : 'null',
                                        groupavatar: {
                                            medium: item.groupAvatar.medium ? item.groupAvatar.medium : 'null',
                                            source: item.groupAvatar.source ? item.groupAvatar.source : 'null',
                                            thumbnail: item.groupAvatar.thumbnail ? item.groupAvatar.thumbnail : 'null'
                                        },
                                        groupname: item.groupName,
                                        groupstatusmessage: item.groupStatusMessage ? item.groupStatusMessage : 'null',
                                        id: item.id,
                                        invitelink: item.inviteLink,
                                        isfavorite: item.isFavorite ? item.isFavorite : false,
                                        ishidden: item.isHidden,
                                        ismarkasunread: item.isMarkAsUnread,
                                        ismute: item.isMute,
                                        ispin: item.isPin,
                                        membercount: item.memberCount,
                                        memberuserids: item.memberUserIds ? item.memberUserIds : [],
                                        owneruserid: item.ownerUserId ? item.ownerUserId : 'null',
                                        pendingcount: item.pendingCount,
                                        pendinguserids: item.pendingUserIds ? item.pendingUserIds : [],
                                        permission: item.permission,
                                        pinmessage: item.pinMessage ? item.pinMessage : [],
                                        sessionid: item.sessionId,
                                        sessionname: item.sessionName,
                                        sessiontype: item.sessionType,
                                        uniqueids: item.uniqueIds ? item.uniqueIds : [],
                                        updatedtime: item.updatedTime,
                                        userids: item.userIds ? item.userIds : ['null'],
                                        user: item.user ? {
                                            avatar: item.user.avatar ? item.user.avatar : 'null',
                                            dialCode: item.user.dialCode,
                                            displayName: item.user.displayName,
                                            id: item.user.id ? item.user.id : 'null',
                                            mobile: item.user.mobile,
                                            permission: item.user.permission,
                                            rename: item.user.rename ? item.user.rename : "",
                                        } :
                                            {
                                                avatar: 'null',
                                                dialCode: 'null',
                                                displayName: 'null',
                                                id: 'null',
                                                mobile: 'null',
                                                permission: 'null',
                                                rename: 'null',
                                            }
                                    })
                                })

                            })
                            break;
                        case 'addMessage':

                            realm.write(() => {
                                data.map((item) => {
                                    item.messages.map((msg) => {
                                        const message = realm.objects("MESSAGE").filtered(`messageid == "${msg.messageId}" `)

                                        if (message.length > 0) {
                                            message.map((msgup, index) => {
                                                return false
                                            })
                                        } else {
                                            realm.create('MESSAGE', {
                                                id: item.id,
                                                groupmessageid: item.groupMessageId,
                                                sessionid: item.sessionId,
                                                messageid: msg.messageId,
                                                referencekey: msg.referenceKey,
                                                senderid: msg.senderId,
                                                oaid: msg.oaId,
                                                displayname: msg.displayName,
                                                avatar: msg.avatar ? msg.avatar : 'null',
                                                rename: "null",
                                                readCount: msg.readCount,
                                                contenttype: msg.contentType,
                                                content: msg.content,
                                                createdtime: msg.createdTime,
                                                dummyfile: [],
                                                media: msg.media ? msg.media : [{
                                                    id: "",
                                                    imageSource: "",
                                                    imageMedium: "",
                                                    imageThumbnail: "",
                                                    type: "",
                                                    mediaRefKey: "",
                                                    width: 0,
                                                    height: 0,
                                                    cancelMedia: false,
                                                    createdTime: "",
                                                    indexMedia: 0,
                                                    timeStamp: 0
                                                }],
                                                cancelmessage: msg.cancelMessage,
                                                strangermessage: msg.strangerMessage,
                                                blockmessage: msg.blockMessage,
                                                status: msg.readCount > 0 ? 'READ' : msg.status,
                                                destructtime: msg.destructTime,
                                                disappeartime: msg.disappearTime,
                                                replymsgId: msg.replyMsgId,
                                                uniqueids: msg.uniqueIds != null ? msg.uniqueIds : ['null'],
                                                updatedtime: msg.updatedTime
                                            })
                                        }


                                    })
                                })

                            })
                            break;
                        case 'addDummyMessage':
                            realm.write(() => {
                                realm.create('MESSAGE', {
                                    id: "",
                                    groupmessageid: "",
                                    sessionid: data.sessionId,
                                    messageid: "",
                                    referencekey: data.referenceKey,
                                    senderid: data.senderId,
                                    oaid: data.oaId,
                                    displayname: "",
                                    avatar: "",
                                    rename: "null",
                                    readCount: 0,
                                    contenttype: data.contentType,
                                    content: data.content,
                                    createdtime: "",
                                    dummyfile: data.media,
                                    media: [{
                                        id: "",
                                        imageSource: "",
                                        imageMedium: "",
                                        imageThumbnail: "",
                                        type: "",
                                        mediaRefKey: "",
                                        width: 0,
                                        height: 0,
                                        cancelMedia: false,
                                        createdTime: "",
                                        indexMedia: 0,
                                        timeStamp: 0
                                    }],
                                    cancelmessage: false,
                                    strangermessage: false,
                                    blockmessage: false,
                                    status: 'WAITING',
                                    destructtime: data.destructTime,
                                    disappeartime: "",
                                    replymsgId: "",
                                    uniqueids: ["null"],
                                    updatedtime: ""
                                })
                            })
                            break;
                        case 'updateDummyMesaage':
                            realm.write(() => {
                                data.map((item) => {
                                    item.messages.map((msg) => {
                                        const dummymsg = realm.objects("MESSAGE").filtered(`referencekey == "${msg.referenceKey}" AND status == "WAITING"`)
                                        dummymsg.map((dummsg) => {
                                            dummsg.id = item.id,
                                                dummsg.groupmessageid = item.groupMessageId,
                                                dummsg.sessionid = item.sessionId,
                                                dummsg.messageid = msg.messageId,
                                                dummsg.referencekey = msg.referenceKey,
                                                dummsg.senderid = msg.senderId,
                                                dummsg.displayname = msg.displayName,
                                                dummsg.avatar = msg.avatar,
                                                dummsg.rename = "null",
                                                dummsg.readCount = msg.readCount,
                                                dummsg.contenttype = msg.contentType,
                                                dummsg.content = msg.content,
                                                dummsg.createdtime = msg.createdTime,
                                                dummsg.dummyfile = []
                                            dummsg.media = [{
                                                id: "",
                                                imageSource: "",
                                                imageMedium: "",
                                                imageThumbnail: "",
                                                type: "",
                                                mediaRefKey: "",
                                                width: 0,
                                                height: 0,
                                                cancelMedia: false,
                                                createdTime: "",
                                                indexMedia: 0,
                                                timeStamp: 0
                                            }],
                                                dummsg.cancelmessage = msg.cancelMessage,
                                                dummsg.strangermessage = msg.strangerMessage,
                                                dummsg.blockmessage = msg.blockMessage,
                                                dummsg.status = msg.status,
                                                dummsg.destructtime = msg.destructTime,
                                                dummsg.disappeartime = msg.disappearTime,
                                                dummsg.replymsgId = msg.replyMsgId,
                                                dummsg.uniqueids = ["null"],
                                                dummsg.updatedtime = msg.updatedTime
                                        })
                                    })
                                })
                            })
                            break;
                        case 'failedUpdateDummyMesaage':
                            realm.write(() => {
                                const dummymsg = realm.objects("MESSAGE").filtered(`referencekey == "${data.referenceKey}" AND status == "WAITING"`)
                                dummymsg.map((dummsg) => {
                                    dummsg.status = "FAILED"
                                })
                            })
                            break;
                        case 'updateUnreadcount':
                            realm.write(() => {
                                const session = realm.objects("ROOM").filtered(`isshow == true`)
                                session.map((sessionroom) => {
                                    if (sessionroom.roomtype == 'official') {
                                        const unreadcount = realm.objects("MESSAGE").filtered(`status == "SENT" AND sessionid == "${sessionroom.sessionid}" AND oaid != "${data.id}"`)
                                        sessionroom.unreadcount = unreadcount.length
                                    } else if (sessionroom.roomtype == 'user') {
                                        const unreadcount = realm.objects("MESSAGE").filtered(`status == "SENT" AND sessionid == "${sessionroom.sessionid}" AND senderid != "${data.id}"`)
                                        sessionroom.unreadcount = unreadcount.length
                                    }
                                })
                            })
                            break;
                        case 'updateLastmessage':
                            realm.write(() => {
                                const session = realm.objects("ROOM").filtered(`isshow == true`)
                                session.map((sessionroom) => {
                                    if (sessionroom.roomtype == 'official') {
                                        const lastmsg = realm.objects("MESSAGE").filtered(`sessionid == "${sessionroom.sessionid}" `)

                                        for (let i = 0; i < lastmsg.length; i++) {
                                            if (lastmsg[i].contenttype == "TEXT") {
                                                sessionroom.lastmessage = lastmsg[i].content
                                            } else if (lastmsg[i].contenttype == "IMAGE") {
                                                sessionroom.lastmessage = "Image"
                                            }
                                        }
                                    }
                                })
                            })
                            break;
                        case 'updateShow':
                            realm.write(() => {
                                data.map((item) => {
                                    const show = realm.objects("ROOM").filtered(`sessionid == "${item.sessionId}"`)
                                    show.map((showdata) => {
                                        showdata.isshow = true
                                        showdata.showtime = item.messages[item.messages.length - 1].createdTime
                                    })
                                })
                            })
                            break;
                        case 'updateRead':
                            const readmsg = realm.objects("MESSAGE").filtered(`sessionid=="${data.sessionId}" 
                                AND createdtime <= "${moment(data.lastMsgReadTime).format('YYYY-MM-DD HH:mm:ss')}" AND senderid != "${data.readerId}" AND status == "SENT"`).snapshot()
                            realm.write(() => {
                                for (let i = 0; i < readmsg.length; i++) {
                                    readmsg[i].status = "READ"

                                }
                            })
                            break;
                        case 'blockOfficial':
                            const blcokroom = realm.objects("ROOM").filtered(`user.id == "${data}"`)
                            realm.write(()=>{
                                blcokroom.map((contacts)=>{
                                    contacts.isblock = true
                                    console.log(contacts.user.displayName);
                                })
                            })
                        break;
                        case 'unblockOfficial':
                            const unblockroom = realm.objects("ROOM").filtered(`user.id == "${data}"`)
                            realm.write(()=>{
                                unblockroom.map((contacts)=>{
                                    contacts.isblock = false
                                    console.log(contacts.user.displayName);
                                })
                            })
                        break;
                        // case 'updateDuplicateroom':
                        //     const updateroom = realm.objects("ROOM").filtered(`sessionid == "${data.sessionId}" `)
                        //     console.log(updateroom);
                        //     // for (let i = 0; i < updateroom.l≈ength; i++) {
                        //     //     updateroom[i].is = 

                        //     // }
                        //     break;
                        case 'deleteData':
                            realm.write(() => {
                                realm.deleteAll()
                            })
                            break;
                    }
                })
        },
        ClearRealm() {
            Realm.clearTestState()
        }

    }
})