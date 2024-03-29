
import Vue from 'vue';
import moment from 'moment'
const Realm = require("realm");

const LoginDataSchema = {
    name: 'LOGIN',
    properties: {
        userid: 'string',
        logoutstamptime: 'string'
    }
}
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
        profileid: "string",
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
        isblock: 'bool',
        idofficialroom: 'string',
        unreadcount: 'int',
        lastmessage: "string",
        lastmessagetime: 'string',
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
        isclose: 'bool',
        guestid: 'string',
        guestUniqueName: 'string',
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
        updatedtime: "string",
        messagetimestamp: "int",
        grouptimedisplay: "string"
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
            return Realm.open({
                schema: [UserSchema, ImageSchema, RoomSchema, ImageroomSchema, UserroomSchema, MessageSchema, MediaMessageSchema, FileDummySchema, OfficialSchema, ImageOfficialSchema, LoginDataSchema],
                schemaVersion: 8
            }).then(
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
        getLoginProfile: function () {
            const profile = this.$store.getters['auth/userlogin']
            return profile
        },
        getToken: function () {
            const token = this.$store.getters['auth/token']
            return token
        }
    },
    methods: {
        getDateUtcDisplay(value) {
            var stillUtc = moment.utc(value).toDate();
            return moment(stillUtc).local().format("DD/MM/YYYY");
        },
        setMessage(session) {
            // let container = document.querySelector(".scrolltopdirectchat");
            this.getdataDB.then(async (data) => {
                let lastshowtime = data
                    .objects("ROOM")
                    .filtered(`sessionid == "${session}"`);
                let msg = data
                    .objects("MESSAGE")
                    .filtered(
                        `sessionid == "${session}" AND  createdtime <= "${lastshowtime[0].showtime}"`
                    );
                let arr = [];

                // this.$store.dispatch("chat/setChat", msg);
                await this.$store.dispatch("chat/setChat", []);
                if (msg.length < this.$store.state.chat.messagelength) {
                    for (let i = 0; i < msg.length; i++) {
                        arr.push(msg[i])
                    }
                    this.$store.dispatch("chat/setChat", arr);
                } else {
                    for (let i = msg.length - 1; i > msg.length - this.$store.state.chat.messagelength; i--) {
                        arr.push(msg[i]);
                    }
                    this.$store.dispatch("chat/setChat", arr);
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

            if (this.getProfile != null && this.getProfile != "") {
                this.getdataDB.then((data) => {
                    let room = data.objects("ROOM").filtered(`isshow == true AND roomtype == "${this.$store.state.room.roomtype}" AND idofficialroom =="${this.getProfile.id}"`).sorted('showtime', true)
                    // if (this.$store.state.room.roomtype == 'official') {
                    //     room = data.objects("ROOM").filtered(`isshow == true AND roomtype == "${this.$store.state.room.roomtype}" AND idofficialroom =="${this.getProfile.id}"`).sorted('showtime', true)
                    // } else {
                    //     room = data.objects("ROOM").filtered(`isshow == true AND roomtype == "${this.$store.state.room.roomtype}"`).sorted('showtime', true)
                    // }
                    this.$store.dispatch("room/setRoom", room)
                })
            }

        },

        setOfficial() {

            this.getdataDB.then((data) => {
                let official = data.objects("OFFICIAL").filtered(`profileid == "${this.getLoginProfile.id}"`);
                this.$store.dispatch("official/setOfficial", official)
            })
        },
        addDataToRealm(data, action) {

            Realm.open({
                schema: [UserSchema, ImageSchema, RoomSchema, ImageroomSchema, UserroomSchema, MessageSchema, MediaMessageSchema, FileDummySchema, OfficialSchema, ImageOfficialSchema, LoginDataSchema],
                schemaVersion: 8,
                // migration: (oldRealm, newRealm) => {

                //     if (oldRealm.schemaVersion < 1) { }
                //     if (oldRealm.schemaVersion < 2) {

                //         const oldObjects = oldRealm.objects('FILEDUMMY');
                //         const newObjects = newRealm.objects('FILEDUMMY');
                //         // // loop through all objects and set the _id property in the new schema
                //         for (const objectIndex in oldObjects) {
                //             const oldObject = oldObjects[objectIndex];
                //             const newObject = newObjects[objectIndex];
                //             newObject.filename = ``
                //         }
                //     }
                //     // if (oldRealm.schemaVersion < 1) { }
                // }
            })
                .then((realm) => {
                    switch (action) {
                        case 'addDatalogin':

                            realm.write(() => {

                                realm.create('LOGIN', {
                                    userid: data.userProfile.id,
                                    logoutstamptime: '0001-01-01 00:00:00'
                                })
                            })
                            break;
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

                                let official = realm.objects("OFFICIAL").filtered(`id == "${item.id}" `)
                                if (official.length > 0) {
                                    return false
                                } else {
                                    realm.write(() => {
                                        realm.create('OFFICIAL', {
                                            adminuserids: item.adminUserIds,
                                            companyemail: item.companyEmail,
                                            companyname: item.companyName,
                                            createdtime: item.createdTime,
                                            displayname: item.displayName,
                                            friendcount: item.friendCount,
                                            gochatid: item.gochatId,
                                            profileid: item.profileId,
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
                                }
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
                                        lastmessagetime: "",
                                        isblock: false,
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
                                        isclose: item.isClose,
                                        guestid: item.guest.guestId,
                                        guestUniqueName: item.guest.guestUniqueName,
                                        membercount: item.memberCount,
                                        memberuserids: item.memberUserIds ? item.memberUserIds : [],
                                        owneruserid: item.ownerUserId ? item.ownerUserId : 'null',
                                        pendingcount: item.pendingCount,
                                        pendinguserids: item.pendingUserIds ? item.pendingUserIds : [],
                                        permission: item.permission ? item.permission : 'null',
                                        pinmessage: item.pinMessage ? item.pinMessage : [],
                                        sessionid: item.sessionId,
                                        sessionname: item.sessionName,
                                        sessiontype: item.sessionType,
                                        uniqueids: item.uniqueIds ? item.uniqueIds : [],
                                        updatedtime: item.updatedTime,
                                        userids: item.userIds ? item.userIds : ['null'],
                                        user: item.user ? {
                                            avatar: item.user.avatar ? item.user.avatar : 'null',
                                            dialCode: item.user.dialCode ? item.user.dialCode : "null",
                                            displayName: item.user.displayName ? item.user.displayName : "null",
                                            id: item.user.id ? item.user.id : 'null',
                                            mobile: item.user.mobile ? item.user.mobile : 'null',
                                            permission: item.user.permission ? item.user.permission : "null",
                                            rename: item.user.rename ? item.user.rename : "null",
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
                        case 'addOfficialRooms':

                            realm.write(() => {
                                realm.create('ROOM', {
                                    isshow: data.roomtype == 'official' ? true : false,
                                    showtime: data.createdTime ? data.createdTime : '',
                                    roomtype: data.roomtype,
                                    idofficialroom: data.idofficialroom ? data.idofficialroom : 'null',
                                    unreadcount: 0,
                                    lastmessage: "",
                                    lastmessagetime: "",
                                    isblock: false,
                                    admincount: data.adminCount,
                                    adminUserIds: data.adminUserIds ? data.adminUserIds : [],
                                    allowlinkinvite: data.allowLinkInvite,
                                    allowuserinvite: data.allowUserInvite,
                                    createdtime: data.createdTime,
                                    deletedtime: data.deletedTime ? data.deletedTime : 'null',
                                    groupavatar: {
                                        medium: data.groupAvatar.medium ? data.groupAvatar.medium : 'null',
                                        source: data.groupAvatar.source ? data.groupAvatar.source : 'null',
                                        thumbnail: data.groupAvatar.thumbnail ? data.groupAvatar.thumbnail : 'null'
                                    },
                                    groupname: data.groupName,
                                    groupstatusmessage: data.groupStatusMessage ? data.groupStatusMessage : 'null',
                                    id: data.id,
                                    invitelink: data.inviteLink,
                                    isfavorite: data.isFavorite ? data.isFavorite : false,
                                    ishidden: data.isHidden,
                                    ismarkasunread: data.isMarkAsUnread,
                                    ismute: data.isMute,
                                    ispin: data.isPin,
                                    isclose: data.isClose,
                                    guestid: data.guest.guestId,
                                    guestUniqueName: data.guest.guestUniqueName,
                                    membercount: data.memberCount,
                                    memberuserids: data.memberUserIds ? data.memberUserIds : [],
                                    owneruserid: data.ownerUserId ? data.ownerUserId : 'null',
                                    pendingcount: data.pendingCount,
                                    pendinguserids: data.pendingUserIds ? data.pendingUserIds : [],
                                    permission: data.permission ? data.permission : 'null',
                                    pinmessage: data.pinMessage ? data.pinMessage : [],
                                    sessionid: data.sessionId,
                                    sessionname: data.sessionName,
                                    sessiontype: data.sessionType,
                                    uniqueids: data.uniqueIds ? data.uniqueIds : [],
                                    updatedtime: data.updatedTime,
                                    userids: data.userIds ? data.userIds : ['null'],
                                    user: data.user ? {
                                        avatar: data.user.avatar ? data.user.avatar : 'null',
                                        dialCode: data.user.dialCode ? data.user.dialCode : "null",
                                        displayName: data.user.displayName ? data.user.displayName : "null",
                                        id: data.user.id ? data.user.id : 'null',
                                        mobile: data.user.mobile ? data.user.mobile : 'null',
                                        permission: data.user.permission ? data.user.permission : "null",
                                        rename: data.user.rename ? data.user.rename : "null",
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


                            break;
                        case 'addMessage':
                            realm.write(() => {
                                data.map((item) => {
                                    item.messages.map((msg) => {
                                        const message = realm.objects("MESSAGE").filtered(`messageid == "${msg.messageId}" `)
                                        if (message.length > 0) {
                                            return false
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
                                                messagetimestamp: msg.messageTimeStamp,
                                                grouptimedisplay: this.getDateUtcDisplay(msg.createdTime),
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
                                    grouptimedisplay: this.getDateUtcDisplay(data.createdtime),
                                    messagetimestamp: data.messagetimestamp,
                                    dummyfile: [],
                                    media: data.media,
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


                                        if (msg.contentType == 'TEXT') {
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
                                                    dummsg.messagetimestamp = msg.messageTimeStamp,
                                                    dummsg.grouptimedisplay = this.getDateUtcDisplay(msg.createdTime),
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
                                        } else {
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
                                                    dummsg.messagetimestamp = msg.messageTimeStamp,
                                                    dummsg.grouptimedisplay = this.getDateUtcDisplay(msg.createdTime),
                                                    dummsg.dummyfile = []
                                                dummsg.media = msg.media,
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
                                        }

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
                        case 'updateLogin':
                            realm.write(() => {
                                const loginuserid = realm.objects("LOGIN").filtered(`userid == "${data.id}"`)
                                loginuserid.map((datalogin) => {
                                    datalogin.logoutstamptime = data.synctime
                                })
                            })
                            break;
                        case 'updateUnreadcount':
                            if (data != null) {
                                realm.write(() => {
                                    const session = realm.objects("ROOM").filtered(`isshow == true AND idofficialroom == "${data.id}"`)

                                    session.map((sessionroom) => {
                                        // if (sessionroom.roomtype == 'official') {
                                        const unreadcount = realm.objects("MESSAGE").filtered(`status == "SENT" AND sessionid == "${sessionroom.sessionid}" AND oaid != "${data.id}"`)
                                        sessionroom.unreadcount = unreadcount.length
                                        // } else if (sessionroom.roomtype == 'user') {
                                        //     const unreadcount = realm.objects("MESSAGE").filtered(`status == "SENT" AND sessionid == "${sessionroom.sessionid}" AND senderid != "${data.id}"`)
                                        //     sessionroom.unreadcount = unreadcount.length
                                        // }
                                    })
                                })
                            }
                            break;
                        case 'updateLastmessage':
                            if (data != null) {
                                realm.write(() => {
                                    const session = realm.objects("ROOM").filtered(`isshow == true AND idofficialroom == "${data.id}"`)
                                    session.map((sessionroom) => {
                                        if (sessionroom.roomtype == 'official') {
                                            const lastmsg = realm.objects("MESSAGE").filtered(`sessionid == "${sessionroom.sessionid}" `)

                                            if (lastmsg[lastmsg.length - 1] != undefined) {
                                                if (lastmsg[lastmsg.length - 1].contenttype == "TEXT") {
                                                    sessionroom.lastmessage = lastmsg[lastmsg.length - 1].content
                                                    sessionroom.lastmessagetime = lastmsg[lastmsg.length - 1].createdtime
    
                                                } else if (lastmsg[lastmsg.length - 1].contenttype == "IMAGE") {
                                                    sessionroom.lastmessage = "Image"
                                                    sessionroom.lastmessagetime = lastmsg[lastmsg.length - 1].createdtime
                                                }
                                            }
                                        }
                                    })
                                })
                            }
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
                        case 'updateRoom':
                            const updateroom = realm.objects("ROOM").filtered(`user.id =="${data.id}"`)
                            realm.write(() => {
                                for (let i = 0; i < updateroom.length; i++) {
                                    updateroom[i].user.displayName = data.displayName
                                    if (data.avatars.source) {
                                        updateroom[i].user.avatar = data.avatars.source
                                    }
                                }
                            })
                            break;
                        case 'updateMessageInRoom':
                            const updateroomtomessage = realm.objects("ROOM").filtered(`user.id =="${data.id}"`)
                            realm.write(() => {
                                for (let i = 0; i < updateroomtomessage.length; i++) {
                                    const updatemessageinroom = realm.objects("MESSAGE").filtered(`sessionid == "${updateroomtomessage[i].sessionid}"`)
                                    for (let j = 0; j < updatemessageinroom.length; j++) {
                                        updatemessageinroom[j].displayname = data.displayName
                                        if (data.avatars.source) {
                                            updatemessageinroom[j].avatar = data.avatars.source
                                        }
                                    }
                                }
                            })
                            break;
                        case 'blockOfficial':
                            const blcokroom = realm.objects("ROOM").filtered(`user.id == "${data}"`)
                            realm.write(() => {
                                blcokroom.map((contacts) => {
                                    contacts.isblock = true

                                })
                            })
                            break;
                        case 'unblockOfficial':
                            const unblockroom = realm.objects("ROOM").filtered(`user.id == "${data}"`)
                            realm.write(() => {
                                unblockroom.map((contacts) => {
                                    contacts.isblock = false

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
                                // realm.deleteAll()
                                let official = realm.objects("OFFICIAL")
                                // let message = realm.objects("MESSAGE")
                                // let room = realm.objects('ROOM')
                                // let userlogin = realm.objects('LOGIN')
                                realm.delete(official)
                                // realm.delete(message)
                                // realm.delete(userlogin)
                                // if (official.length > 0) {
                                //     realm.delete(official)
                                // }


                            })
                            break;
                        case 'deleteallData':
                            realm.write(() => { realm.deleteAll() })
                            break;
                    }

                })
        },
        ClearRealm() {
            Realm.clearTestState()
        }

    }
})