const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require("fs")
const axios = require('axios')
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const FileType = require('file-type')
const tiktok = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const emojiUnicode = require('emoji-unicode')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./ANBOTDIDIN')
const { color, bgcolor } = require('./lib/color')
const { exif } = require('./lib/exif')
const { animesaran } = require('./src/animesaran')
const { animesaran2 } = require('./src/animesaran2')
const { help } = require('./lib/help')
const { rules } = require('./src/rules')
const { listsurah } = require('./src/listsurah')
const { sound } = require('./lib/sound')
const { bahasa } = require('./lib/bahasa')
const { donasi } = require('./lib/donasi')
const { didinp } = require('./src/didin')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')

const { wait, banner, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')


const ZeksApi = 'apivinz'
const leysKey = 'MNQYOVSL'
const XteamD = '7415bc4287ad5ca8'
const apiKey = '7ed90d537ab5edddb6ba6465'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:INI ORANG\n'
            + 'ORG: ANBOT-D;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285298595430:+6285298595430\n'
            + 'END:VCARD'
prefix = '/'
blocked = []   
didinlimit = '1000000000000'
cr = `*ANBOT-D*`
mendo = '*SEDEKAH*'
reply = '*REPLY BY DIDIN*'
mensa = '*KODE BAHASA*'
vr = '*ANBOT-D*'
/******** OWNER NUMBER**********/
const ownerNumber = ["34632246602@s.whatsapp.net"]
/*********ANBOT-D********/
const _leveling = JSON.parse(fs.readFileSync('./ANBOT-D/leveling.json'))
const gombal = JSON.parse(fs.readFileSync('./src/gombal.json'))
const muslim = JSON.parse(fs.readFileSync('./didin/muslim.json'))
const tahlil = JSON.parse(fs.readFileSync('./didin/tahlil.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./src/hekerbucin.json'))
const _samih = JSON.parse(fs.readFileSync('./ANBOT-D/simi.json'))
const katailham = JSON.parse(fs.readFileSync('./src/katailham.json'))
const premium = JSON.parse(fs.readFileSync('./ANBOT-D/didin.json'))
const _level = JSON.parse(fs.readFileSync('./ANBOT-D/level.json'))
const _registered = JSON.parse(fs.readFileSync('./ANBOT-D/registered.json'))
const badword = JSON.parse(fs.readFileSync('./ANBOT-D/badword.json'))
const antivirtex = JSON.parse(fs.readFileSync('./ANBOT-D/antivirtex.json'))
const katakasar = JSON.parse(fs.readFileSync('./ANBOT-D/katakasar.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./ANBOT-D/bucin.json'))
const welkom = JSON.parse(fs.readFileSync('./ANBOT-D/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./ANBOT-D/nsfw.json'))
const event = JSON.parse(fs.readFileSync('./ANBOT-D/event.json'))
const _limit = JSON.parse(fs.readFileSync('./ANBOT-D/limit.json'))
const uang = JSON.parse(fs.readFileSync('./ANBOT-D/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./ANBOT-D/antilink.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./ANBOT-D/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./ANBOT-D/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./ANBOT-D/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./ANBOT-D/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./ANBOT-D/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./ANBOT-D/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./ANBOT-D/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(_limit))
            }
        }


function monospace(string) {
return '```' + string + '```'
}
        
function addMetadata(packname, author) {
				if (!packname) packname = 'ANBOT-D'; if (!author) author = ' DIDIN';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION *********/

const didin = new WAConnection()
   didin.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('anBOT-D','red'), color('(+)','white'), color(' SCAN CODENYA','aqua'), color('SUBSCRIBE YT HADIR_HMM','yellow'))
})

	didin.on('credentials-updated', () => {
		fs.writeFileSync('./DIDIN.json', JSON.stringify(didin.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./DIDIN.json') && didin.loadAuthInfo('./DIDIN.json')
	didin.on('connecting', () => {
		start('2', color('[ ! ]SCAN','aqua'))
	})
	didin.on('open', () => {
		success('2', color('[ ! ]connect','red'))
	})
	didin.connect({timeoutMs: 30*1000})

didin.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await didin.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await didin.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini jangan lupa intro 
┏━━━━━━━━━━━━━━━━━━━━
┃ HAY SAYA BOT SALAM KENAL
┃ YA, KETIK ${prefix}menu
┃ UNTUK MELIHAT MENU BOT
┣━━━━━━━━━━━━━━━━━━━━
┃ NAMA    :
┃ TINGGAL :
┃ UMUR    :
┗━━━━━━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				didin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await didin.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]} Jangan Lupa Untuk Selalu Tersenyum Ya😊`
				let buff = await getBuffer(ppimg)
				didin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	didin.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	

	
	didin.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (!mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const txt = mek.message.conversation
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const didinanbot = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = didin.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = didin.contacts[sender] != undefined ? didin.contacts[sender].vname || didin.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await didin.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false
			const isPrem = premium.includes(sender)
			const isBadWord = isGroup ? badword.includes(from) : false
			const isAntiVirtex= isGroup ? antivirtex.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				didin.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				didin.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? didin.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    didin.sendMessage(from, teks, image, {quoted:mek})
		    }

		    const costum = (pesan, tipe, target, target2) => {
			didin.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    didin.sendMessage(from, audio, mp3, {quoted:mek})
		    }

			var premi = '*[NO]*'
			if (isPrem) {
				premi = '*[YES]*'
			} 
			if (isOwner) {
				premi = '*[Didin]*'
			}
      var simihh = 'OFF'
			if(isSimi) {
			simihh = 'ON'
			}
			var welcomee = 'OFF'
			if (isWelkom) {
			welcomee = 'ON'
			}
			var nsfww = 'OFF'
			if (isNsfw) {
			nsfww = 'ON'
			}
			var badWordd = 'OFF'
			if (isBadWord) {
			badWordd = 'ON'
			}
			var antiLinkk = 'OFF'
			if (isAntiLink) {
			antiLinkk = 'ON'
			}
			var antiVirtexx = 'OFF'
			if (isAntiVirtex) {
			antiVirtexx = 'ON'
			}
			
			
			

            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = didinlimit - lmt.limit
                            if (limitCounts <= 0) return didin.sendMessage(from,`Limit anda sudah habis\n\n_Note : Limit akan direset setiap jam 00.00! atau anda bisa membeli limit dengan ${prefix}buylimit 2_`, text,{ quoted: mek})
                            didin.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(_limit))
                        didin.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= didinlimit ) {
              	  position = true
                    didin.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./ANBOT-D/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function bance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
            if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh anBot-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  
if (mesejAnti.includes("://www.tiktok.com")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh anBot-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }

if (mesejAnti.includes("://www.instagram.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh anBot-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  
if (mesejAnti.includes("://i.ibb.co/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh anBot-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
            if (mesejAnti.includes("://youtu.be/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh anBot-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
            if (mesejAnti.includes("://www.facebook.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh anBot-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }

            if (txt.length > 500){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas')
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
           costum(monospace(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`))
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*BOT HARUS JADI ADMIN—*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("bego")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("bokep")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("bangsat")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("netnot")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("tolol")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("anjir")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("goblok")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("ajg")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("ngentot")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("anjing")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("babi")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("kontl")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("kontol")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("memek")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  


        const callate = ['¡𝑪𝒐𝒎𝒐 𝒏𝒐 𝒕𝒆 𝒄𝒂𝒍𝒍𝒆𝒔 𝒅𝒆 𝒖𝒏𝒂 𝒎𝒂𝒍𝒅𝒊𝒕𝒂 𝒗𝒆𝒛, 𝒕𝒆 𝒗𝒂𝒎𝒐𝒔 𝒂 𝒎𝒆𝒕𝒆𝒓 𝒅𝒆 𝒑𝒐𝒍𝒍𝒂𝒛𝒐𝒔 𝒆𝒏 𝒆𝒔𝒂 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒂 𝒃𝒐𝒄𝒂 𝒅𝒆 𝒑𝒖𝒕𝒂 𝒒𝒖𝒆 𝒕𝒊𝒆𝒏𝒆𝒔 𝒉𝒂𝒔𝒕𝒂 𝒒𝒖𝒆 𝒏𝒐 𝒑𝒖𝒆𝒅𝒂𝒔 𝒔𝒆𝒏𝒕𝒊𝒓 𝒏𝒊 𝒍𝒐𝒔 𝒅𝒊𝒆𝒏𝒕𝒆𝒔. 𝑴𝒆𝒋𝒐𝒓 𝒒𝒖𝒆 𝒕𝒆 𝒄𝒂𝒍𝒍𝒆𝒔 𝒚𝒂 𝒅𝒆 𝒖𝒏𝒂 𝒑𝒖𝒕𝒂 𝒗𝒆𝒛 𝒐 𝒚𝒂 𝒔𝒂𝒃𝒆𝒔 𝒍𝒐 𝒒𝒖𝒆 𝒑𝒂𝒔𝒂𝒓𝒂́ 𝒑𝒆𝒓𝒅𝒂𝒛𝒐 𝒅𝒆 𝒑𝒖𝒕𝒂!',
            '¡𝑪𝒐𝒎𝒐 𝒏𝒐 𝒕𝒆 𝒄𝒂𝒍𝒍𝒆𝒔 𝒅𝒆 𝒖𝒏𝒂 𝒑𝒖𝒕𝒂 𝒗𝒆𝒛, 𝒕𝒆 𝒗𝒂𝒎𝒐𝒔 𝒂 𝒎𝒆𝒕𝒆𝒓 𝒕𝒂𝒏𝒕𝒂𝒔 𝒐𝒔𝒕𝒊𝒂𝒔 𝒆𝒏 𝒍𝒂 𝒃𝒐𝒄𝒂 𝒒𝒖𝒆 𝒔𝒆 𝒑𝒐𝒅𝒓𝒂́ 𝒋𝒖𝒈𝒂𝒓 𝒂𝒍 𝒗𝒐𝒍𝒆𝒊𝒃𝒐𝒍 𝒅𝒆𝒏𝒕𝒓𝒐 𝒅𝒆 𝒕𝒖 𝒃𝒐𝒄𝒂 𝒄𝒐𝒏 𝒕𝒐𝒅𝒐𝒔 𝒕𝒖𝒔 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒐𝒔 𝒅𝒊𝒆𝒏𝒕𝒆𝒔 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒒𝒖𝒆 𝒕𝒊𝒆𝒏𝒆𝒔. 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒄𝒐𝒏𝒔𝒆𝒓𝒗𝒂𝒓 𝒕𝒐𝒅𝒐𝒔 𝒕𝒖𝒔 𝒅𝒊𝒆𝒏𝒕𝒆𝒄𝒊𝒕𝒐𝒔, 𝒎𝒆𝒋𝒐𝒓 𝒄𝒂𝒍𝒍𝒂𝒕𝒆 𝒚𝒂 𝒑𝒆𝒅𝒂𝒛𝒐 𝒅𝒆 𝒑𝒖𝒕@.!']
        const sexo = ['𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!',
            '𝙖 𝟰 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙖𝙜𝙖𝙧𝙧𝙖𝙗𝙖 𝙙𝙚𝙡 𝙥𝙚𝙡𝙤 𝙮 𝙡𝙚 𝙜𝙧𝙞𝙩𝙖𝙗𝙖𝙨 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙜𝙪𝙖𝙧𝙧𝙖 "𝐒𝐨𝐲 𝐭𝐮 𝐩𝐞𝐫𝐫𝐚 𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, ¡𝐇𝐚𝐳𝐦𝐞 𝐓𝐮𝐲𝐚!" 𝙮 𝙙𝙚 𝙡𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖 𝙙𝙖𝙙𝙤, 𝙩𝙚 𝙙𝙚𝙟𝙤 𝙩𝙚𝙢𝙗𝙡𝙖𝙣𝙙𝙤 𝙙𝙚 𝙡𝙖 𝙩𝙧𝙚𝙢𝙚𝙣𝙙𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙖 + 𝙘𝙤𝙧𝙧𝙞𝙙𝙖 𝙙𝙚𝙣𝙩𝙧𝙤 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖 𝙙𝙖𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙧 𝙪𝙣𝙖 𝙯𝙤𝙧𝙧𝙖 𝙢𝙪𝙡𝙩𝙞𝙤𝙧𝙜𝙖𝙨𝙢𝙞𝙘𝙖!',
            '𝙖 𝟰 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙚𝙢𝙥𝙤𝙩𝙧𝙖𝙗𝙖 𝙙𝙪𝙧𝙤 𝙚𝙨𝙩𝙖𝙣𝙙𝙤 𝙖𝙩𝙖𝙙𝙖 𝙖 𝙡𝙖 𝙘𝙖𝙢𝙖 𝙮 𝙩𝙚 𝙛𝙤𝙡𝙡𝙖𝙗𝙖 𝙨𝙖𝙡𝙫𝙖𝙟𝙚𝙢𝙚𝙣𝙩𝙚 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙨𝙤𝙡𝙤 𝙨𝙖𝙗𝙞𝙖𝙨 𝙜𝙧𝙞𝙩𝙖𝙧𝙡𝙚 "𝐃𝐚𝐥𝐞 𝐏𝐚𝐩𝐢, 𝐍𝐨 𝐩𝐚𝐫𝐞𝐬..., ¡𝐐𝐔𝐄 𝐑𝐈𝐂𝐎! 𝐔𝐦𝐦𝐡.." 𝙮 𝙙𝙚 𝙡𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙖 𝙨𝙖𝙡𝙫𝙖𝙟𝙚, 𝙩𝙚𝙧𝙢𝙞𝙣𝙤 𝙘𝙤𝙧𝙧𝙞𝙚𝙣𝙙𝙤𝙨𝙚 𝙚𝙣 𝙩𝙪 𝙗𝙤𝙦𝙪𝙞𝙩𝙖 𝙙𝙚 𝙥𝙪𝙩𝙖!']
        const amor = ['𝟏𝟎𝟎%',
            '99%',
            '98%',
            '97%',
            '96%',
            '95%',
            '94%',
            '93%',
            '92%',
            '91%',
            '90%',
            '89%',
            '88%',
            '87%',
            '86%',
            '85%',
            '84%',
            '83%',
            '82%',
            '81%',
            '80%',
            '79%',
            '78%',
            '77%',
            '76%',
            '75%',
            '74%',
            '73%',
            '72%',
            '71%',
            '70%',
            '69%',
            '68%',
            '67%',
            '66%',
            '64%',
            '63%',
            '62%',
            '61%',
            '60%',
            '59%',
            '58%',
            '57%',
            '56%',
            '55%',
            '54%',
            '53%',
            '52%',
            '51%',
            '50%',
            '49%',
            '48%',
            '47%',
            '46%',
            '45%',
            '44%',
            '43%',
            '42%',
            '41%',
            '40%',
            '39%',
            '38%',
            '37%',
            '36%',
            '35%',
            '34%',
            '33%',
            '32%',
            '31%',
            '30%',
            '29%',
            '28%',
            '27%',
            '26%',
            '25%',
            '24%',
            '23%',
            '22%',
            '21%',
            '20%',
            '19%',
            '18%',
            '17%',
            '16%',
            '15%',
            '14%',
            '13%',
            '12%',
            '11%',
            '10%',
            '9%',
            '8%',
            '7%',
            '6%',
            '5%',
            '4%',
            '3%',
            '2%',
            '1%',
            '0%',]

        const zorras = ['😏 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐙𝐎𝐑𝐑𝐀! 💋💄',
            '𝟏𝟎𝟎% 💋💄',
            '99% 💋💄',
            '98% 💋💄',
            '97% 💋💄',
            '96% 💋💄',
            '95% 💋💄',
            '94% 💋💄',
            '93% 💋💄',
            '92% 💋💄',
            '91% 💋💄',
            '90% 💋💄',
            '89% 💋💄',
            '88% 💋💄',
            '87% 💋💄',
            '86% 💋💄',
            '85% 💋💄',
            '84% 💋💄',
            '83% 💋💄',
            '82% 💋💄',
            '81% 💋💄',
            '80% 💋💄',
            '79% 💋💄',
            '78% 💋💄',
            '77% 💋💄',
            '76% 💋💄',
            '75% 💋💄',
            '74% 💋💄',
            '73% 💋💄',
            '72% 💋💄',
            '71% 💋💄',
            '70% 💋💄',
            '69% 💋💄',
            '68% 💋💄',
            '67% 💋💄',
            '66% 💋💄',
            '64% 💋💄',
            '63% 💋💄',
            '62% 💋💄',
            '61% 💋💄',
            '60% 💋💄',
            '59% 💋💄',
            '58% 💋💄',
            '57% 💋💄',
            '56% 💋💄',
            '55% 💋💄',
            '54% 💋💄',
            '53% 💋💄',
            '52% 💋💄',
            '51% 💋💄',
            '50% 💋💄',
            '49% 💋💄',
            '48% 💋💄',
            '47% 💋💄',
            '46% 💋💄',
            '45% 💋💄',
            '44% 💋💄',
            '43% 💋💄',
            '42% 💋💄',
            '41% 💋💄',
            '40% 💋💄',
            '39% 💋💄',
            '38% 💋💄',
            '37% 💋💄',
            '36% 💋💄',
            '35% 💋💄',
            '34% 💋💄',
            '33% 💋💄',
            '32% 💋💄',
            '31% 💋💄',
            '30% 💋💄',
            '29% 💋💄',
            '28% 💋💄',
            '27% 💋💄',
            '26% 💋💄',
            '25% 💋💄',
            '24% 💋💄',
            '23% 💋💄',
            '22% 💋💄',
            '21% 💋💄',
            '20% 💋💄',
            '19% 💋💄',
            '18% 💋💄',
            '17% 💋💄',
            '16% 💋💄',
            '15% 💋💄',
            '14% 💋💄',
            '13% 💋💄',
            '12% 💋💄',
            '11% 💋💄',
            '10% 💋💄',
            '9% 💋💄',
            '8% 💋💄',
            '7% 💋💄',
            '6% 💋💄',
            '5% 💋💄',
            '4% 💋💄',
            '3% 💋💄',
            '2% 💋💄',
            '1% 💋💄',
            '0% 💋💄',]

        const guarras = ['😏 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐆𝐔𝐀𝐑𝐑𝐀! 💋💦',
            '𝟏𝟎𝟎% 💋💦',
            '99% 💋💦',
            '98% 💋💦',
            '97% 💋💦',
            '96% 💋💦',
            '95% 💋💦',
            '94% 💋💦',
            '93% 💋💦',
            '92% 💋💦',
            '91% 💋💦',
            '90% 💋💦',
            '89% 💋💦',
            '88% 💋💦',
            '87% 💋💦',
            '86% 💋💦',
            '85% 💋💦',
            '84% 💋💦',
            '83% 💋💦',
            '82% 💋💦',
            '81% 💋💦',
            '80% 💋💦',
            '79% 💋💦',
            '78% 💋💦',
            '77% 💋💦',
            '76% 💋💦',
            '75% 💋💦',
            '74% 💋💦',
            '73% 💋💦',
            '72% 💋💦',
            '71% 💋💦',
            '70% 💋💦',
            '69% 💋💦',
            '68% 💋💦',
            '67% 💋💦',
            '66% 💋💦',
            '64% 💋💦',
            '63% 💋💦',
            '62% 💋💦',
            '61% 💋💦',
            '60% 💋💦',
            '59% 💋💦',
            '58% 💋💦',
            '57% 💋💦',
            '56% 💋💦',
            '55% 💋💦',
            '54% 💋💦',
            '53% 💋💦',
            '52% 💋💦',
            '51% 💋💦',
            '50% 💋💦',
            '49% 💋💦',
            '48% 💋💦',
            '47% 💋💦',
            '46% 💋💦',
            '45% 💋💦',
            '44% 💋💦',
            '43% 💋💦',
            '42% 💋💦',
            '41% 💋💦',
            '40% 💋💦',
            '39% 💋💦',
            '38% 💋💦',
            '37% 💋💦',
            '36% 💋💦',
            '35% 💋💦',
            '34% 💋💦',
            '33% 💋💦',
            '32% 💋💦',
            '31% 💋💦',
            '30% 💋💦',
            '29% 💋💦',
            '28% 💋💦',
            '27% 💋💦',
            '26% 💋💦',
            '25% 💋💦',
            '24% 💋💦',
            '23% 💋💦',
            '22% 💋💦',
            '21% 💋💦',
            '20% 💋💦',
            '19% 💋💦',
            '18% 💋💦',
            '17% 💋💦',
            '16% 💋💦',
            '15% 💋💦',
            '14% 💋💦',
            '13% 💋💦',
            '12% 💋💦',
            '11% 💋💦',
            '10% 💋💦',
            '9% 💋💦',
            '8% 💋💦',
            '7% 💋💦',
            '6% 💋💦',
            '5% 💋💦',
            '4% 💋💦',
            '3% 💋💦',
            '2% 💋💦',
            '1% 💋💦',
            '0% 💋💦',]

        const tontos = ['😂 ¡𝐄𝐑𝐄𝐒 𝐓𝐎𝐍𝐓𝐈𝐓𝐎 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! 🤓',
            '𝟏𝟎𝟎% 🤓',
            '99% 🤓',
            '98% 🤓',
            '97% 🤓',
            '96% 🤓',
            '95% 🤓',
            '94% 🤓',
            '93% 🤓',
            '92% 🤓',
            '91% 🤓',
            '90% 🤓',
            '89% 🤓',
            '88% 🤓',
            '87% 🤓',
            '86% 🤓',
            '85% 🤓',
            '84% 🤓',
            '83% 🤓',
            '82% 🤓',
            '81% 🤓',
            '80% 🤓',
            '79% 🤓',
            '78% 🤓',
            '77% 🤓',
            '76% 🤓',
            '75% 🤓',
            '74% 🤓',
            '73% 🤓',
            '72% 🤓',
            '71% 🤓',
            '70% 🤓',
            '69% 🤓',
            '68% 🤓',
            '67% 🤓',
            '66% 🤓',
            '64% 🤓',
            '63% 🤓',
            '62% 🤓',
            '61% 🤓',
            '60% 🤓',
            '59% 🤓',
            '58% 🤓',
            '57% 🤓',
            '56% 🤓',
            '55% 🤓',
            '54% 🤓',
            '53% 🤓',
            '52% 🤓',
            '51% 🤓',
            '50% 🤓',
            '49% 🤓',
            '48% 🤓',
            '47% 🤓',
            '46% 🤓',
            '45% 🤓',
            '44% 🤓',
            '43% 🤓',
            '42% 🤓',
            '41% 🤓',
            '40% 🤓',
            '39% 🤓',
            '38% 🤓',
            '37% 🤓',
            '36% 🤓',
            '35% 🤓',
            '34% 🤓',
            '33% 🤓',
            '32% 🤓',
            '31% 🤓',
            '30% 🤓',
            '29% 🤓',
            '28% 🤓',
            '27% 🤓',
            '26% 🤓',
            '25% 🤓',
            '24% 🤓',
            '23% 🤓',
            '22% 🤓',
            '21% 🤓',
            '20% 🤓',
            '19% 🤓',
            '18% 🤓',
            '17% 🤓',
            '16% 🤓',
            '15% 🤓',
            '14% 🤓',
            '13% 🤓',
            '12% 🤓',
            '11% 🤓',
            '10% 🤓',
            '9% 🤓',
            '8% 🤓',
            '7% 🤓',
            '6% 🤓',
            '5% 🤓',
            '4% 🤓',
            '3% 🤓',
            '2% 🤓',
            '1% 🤓',
            '0% 🤓',]

        const planas = ['🤭 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐋𝐀𝐍𝐀! 📚❤️',
            '𝟏𝟎𝟎% 📕❤️',
            '99% 📗💚',
            '98% 📘💙',
            '97% 📙🧡',
            '96% 📕❤️',
            '95% 📗💚',
            '94% 📘💙',
            '93% 📙🧡',
            '92% 📕❤️',
            '91% 📗💚',
            '90% 📘💙',
            '89% 📙🧡',
            '88% 📕❤️',
            '87% 📗💚',
            '86% 📘💙',
            '85% 📙🧡',
            '84% 📕❤️',
            '83% 📗💚',
            '82% 📘💙',
            '81% 📙🧡',
            '80% 📕❤️',
            '79% 📗💚',
            '78% 📘💙',
            '77% 📙🧡',
            '76% 📕❤️',
            '75% 📗💚',
            '74% 📘💙',
            '73% 📙🧡',
            '72% 📕❤️',
            '71% 📗💚',
            '70% 📘💙',
            '69% 📙🧡',
            '68% 📕❤️',
            '67% 📗💚',
            '66% 📘💙',
            '64% 📙🧡',
            '63% 📕❤️',
            '62% 📗💚',
            '61% 📘💙',
            '60% 📙🧡',
            '59% 📕❤️',
            '58% 📗💚',
            '57% 📘💙',
            '56% 📙🧡',
            '55% 📕❤️',
            '54% 📗💚',
            '53% 📘💙',
            '52% 📙🧡',
            '51% 📕❤️',
            '50% 📗💚',
            '49% 📘💙',
            '48% 📙🧡',
            '47% 📕❤️',
            '46% 📗💚',
            '45% 📘💙',
            '44% 📙🧡',
            '43% 📕❤️',
            '42% 📗💚',
            '41% 📘💙',
            '40% 📙🧡',
            '39% 📕❤️',
            '38% 📗💚',
            '37% 📘💙',
            '36% 📙🧡',
            '35% 📕❤️',
            '34% 📗💚',
            '33% 📘💙',
            '32% 📙🧡',
            '31% 📕❤️',
            '30% 📗💚',
            '29% 📘💙',
            '28% 📙🧡',
            '27% 📕❤️',
            '26% 📗💚',
            '25% 📘💙',
            '24% 📙🧡',
            '23% 📕❤️',
            '22% 📗💚',
            '21% 📘💙',
            '20% 📙🧡',
            '19% 📕❤️',
            '18% 📗💚',
            '17% 📘💙',
            '16% 📙🧡',
            '15% 📕❤️',
            '14% 📗💚',
            '13% 📘💙',
            '12% 📙🧡',
            '11% 📕❤️',
            '10% 📗💚',
            '9% 📘💙',
            '8% 📙🧡',
            '7% 📕❤️',
            '6% 📗💚',
            '5% 📘💙',
            '4% 📙🧡',
            '3% 📕❤️',
            '2% 📗💚',
            '1% 📘💙',
            '0% 📙🧡',]

const gay = ['😂 ¡𝐄𝐑𝐄𝐒 𝐌𝐀𝐑𝐈𝐂𝐎𝐍 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! 🏳️‍🌈',
            '𝟏𝟎𝟎% 🏳️‍🌈',
            '99% 🏳️‍🌈',
            '98% 🏳️‍🌈',
            '97% 🏳️‍🌈',
            '96% 🏳️‍🌈',
            '95% 🏳️‍🌈',
            '94% 🏳️‍🌈',
            '93% 🏳️‍🌈',
            '92% 🏳️‍🌈',
            '91% 🏳️‍🌈',
            '90% 🏳️‍🌈',
            '89% 🏳️‍🌈',
            '88% 🏳️‍🌈',
            '87% 🏳️‍🌈',
            '86% 🏳️‍🌈',
            '85% 🏳️‍🌈',
            '84% 🏳️‍🌈',
            '83% 🏳️‍🌈',
            '82% 🏳️‍🌈',
            '81% 🏳️‍🌈',
            '80% 🏳️‍🌈',
            '79% 🏳️‍🌈',
            '78% 🏳️‍🌈',
            '77% 🏳️‍🌈',
            '76% 🏳️‍🌈',
            '75% 🏳️‍🌈',
            '74% 🏳️‍🌈',
            '73% 🏳️‍🌈',
            '72% 🏳️‍🌈',
            '71% 🏳️‍🌈',
            '70% 🏳️‍🌈',
            '69% 🏳️‍🌈',
            '68% 🏳️‍🌈',
            '67% 🏳️‍🌈',
            '66% 🏳️‍🌈',
            '64% 🏳️‍🌈',
            '63% 🏳️‍🌈',
            '62% 🏳️‍🌈',
            '61% 🏳️‍🌈',
            '60% 🏳️‍🌈',
            '59% 🏳️‍🌈',
            '58% 🏳️‍🌈',
            '57% 🏳️‍🌈',
            '56% 🏳️‍🌈',
            '55% 🏳️‍🌈',
            '54% 🏳️‍🌈',
            '53% 🏳️‍🌈',
            '52% 🏳️‍🌈',
            '51% 🏳️‍🌈',
            '50% 🏳️‍🌈',
            '49% 🏳️‍🌈',
            '48% 🏳️‍🌈',
            '47% 🏳️‍🌈',
            '46% 🏳️‍🌈',
            '45% 🏳️‍🌈',
            '44% 🏳️‍🌈',
            '43% 🏳️‍🌈',
            '42% 🏳️‍🌈',
            '41% 🏳️‍🌈',
            '40% 🏳️‍🌈',
            '39% 🏳️‍🌈',
            '38% 🏳️‍🌈',
            '37% 🏳️‍🌈',
            '36% 🏳️‍🌈',
            '35% 🏳️‍🌈',
            '34% 🏳️‍🌈',
            '33% 🏳️‍🌈',
            '32% 🏳️‍🌈',
            '31% 🏳️‍🌈',
            '30% 🏳️‍🌈',
            '29% 🏳️‍🌈',
            '28% 🏳️‍🌈',
            '27% 🏳️‍🌈',
            '26% 🏳️‍🌈',
            '25% 🏳️‍🌈',
            '24% 🏳️‍🌈',
            '23% 🏳️‍🌈',
            '22% 🏳️‍🌈',
            '21% 🏳️‍🌈',
            '20% 🏳️‍🌈',
            '19% 🏳️‍🌈',
            '18% 🏳️‍🌈',
            '17% 🏳️‍🌈',
            '16% 🏳️‍🌈',
            '15% 🏳️‍🌈',
            '14% 🏳️‍🌈',
            '13% 🏳️‍🌈',
            '12% 🏳️‍🌈',
            '11% 🏳️‍🌈',
            '10% 🏳️‍🌈',
            '9% 🏳️‍🌈',
            '8% 🏳️‍🌈',
            '7% 🏳️‍🌈',
            '6% 🏳️‍🌈',
            '5% 🏳️‍🌈',
            '4% 🏳️‍🌈',
            '3% 🏳️‍🌈',
            '2% 🏳️‍🌈',
            '1% 🏳️‍🌈',
            '0% 🏳️‍🌈']

const putas = ['😏 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐔𝐓𝐀! 💄💰',
            '𝟏𝟎𝟎% 💄💰',
            '99% 💄💰',
            '98% 💄💰',
            '97% 💄💰',
            '96% 💄💰',
            '95% 💄💰',
            '94% 💄💰',
            '93% 💄💰',
            '92% 💄💰',
            '91% 💄💰',
            '90% 💄💰',
            '89% 💄💰',
            '88% 💄💰',
            '87% 💄💰',
            '86% 💄💰',
            '85% 💄💰',
            '84% 💄💰',
            '83% 💄💰',
            '82% 💄💰',
            '81% 💄💰',
            '80% 💄💰',
            '79% 💄💰',
            '78% 💄💰',
            '77% 💄💰',
            '76% 💄💰',
            '75% 💄💰',
            '74% 💄💰',
            '73% 💄💰',
            '72% 💄💰',
            '71% 💄💰',
            '70% 💄💰',
            '69% 💄💰',
            '68% 💄💰',
            '67% 💄💰',
            '66% 💄💰',
            '64% 💄💰',
            '63% 💄💰',
            '62% 💄💰',
            '61% 💄💰',
            '60% 💄💰',
            '59% 💄💰',
            '58% 💄💰',
            '57% 💄💰',
            '56% 💄💰',
            '55% 💄💰',
            '54% 💄💰',
            '53% 💄💰',
            '52% 💄💰',
            '51% 💄💰',
            '50% 💄💰',
            '49% 💄💰',
            '48% 💄💰',
            '47% 💄💰',
            '46% 💄💰',
            '45% 💄💰',
            '44% 💄💰',
            '43% 💄💰',
            '42% 💄💰',
            '41% 💄💰',
            '40% 💄💰',
            '39% 💄💰',
            '38% 💄💰',
            '37% 💄💰',
            '36% 💄💰',
            '35% 💄💰',
            '34% 💄💰',
            '33% 💄💰',
            '32% 💄💰',
            '31% 💄💰',
            '30% 💄💰',
            '29% 💄💰',
            '28% 💄💰',
            '27% 💄💰',
            '26% 💄💰',
            '25% 💄💰',
            '24% 💄💰',
            '23% 💄💰',
            '22% 💄💰',
            '21% 💄💰',
            '20% 💄💰',
            '19% 💄💰',
            '18% 💄💰',
            '17% 💄💰',
            '16% 💄💰',
            '15% 💄💰',
            '14% 💄💰',
            '13% 💄💰',
            '12% 💄💰',
            '11% 💄💰',
            '10% 💄💰',
            '9% 💄💰',
            '8% 💄💰',
            '7% 💄💰',
            '6% 💄💰',
            '5% 💄💰',
            '4% 💄💰',
            '3% 💄💰',
            '2% 💄💰',
            '1% 💄💰',
            '0% 💄💰',]


			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedDidin = type === 'extendedTextMessage' && content.includes('textMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
	
		if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIBADI ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  PUBLIK  ]", "aqua"), color(budy, "white"), "DARI", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			let authorname = didin.contacts[from] != undefined ? didin.contacts[from].vname || didin.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			
			switch(command) {
				
                case 'gay':

          if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  random = gay[Math.floor(Math.random() * (gay.length))]
  hasil = `🖤😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐎𝐒 𝐆𝐀𝐘𝐒!* 😏🖤\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑴𝒂𝒓𝒊𝒄𝒐𝒏 𝒑𝒆𝒓𝒅𝒊𝒅𝒐 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${random}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑴𝒂𝒓𝒊𝒄𝒐𝒏 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳*\n\n*@${mentioned[0].split('@')[0]}*\n🖤😳 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐎 𝐌𝐀𝐑𝐈𝐂𝐎𝐍 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 😳🖤` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

case 'puta':
if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  medidorputas = putas[Math.floor(Math.random() * (putas.length))]
  hasil = `💙😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐏𝐔𝐓𝐀𝐒!* 😏💙\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑷𝒖𝒕𝒂 𝒃𝒂𝒓𝒂𝒕𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorputas}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑷𝒖𝒕𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n💙💰 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐔𝐓𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 💰💙` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

case 'zorra':
if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  medidorzorras = zorras[Math.floor(Math.random() * (zorras.length))]
  hasil = `💛😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐙𝐎𝐑𝐑𝐀𝐒!* 😏💛\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝒁𝒐𝒓𝒓𝒂 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorzorras}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝒁𝒐𝒓𝒓𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n💛💄 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐙𝐎𝐑𝐑𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 💄💛` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

  case 'guarra':
if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  medidorguarras = guarras[Math.floor(Math.random() * (guarras.length))]
  hasil = `🤍😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐆𝐔𝐀𝐑𝐑𝐀𝐒!* 😏🤍\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑮𝒖𝒂𝒓𝒓𝒂 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorguarras}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑮𝒖𝒂𝒓𝒓𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n🤍💋 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐆𝐔𝐀𝐑𝐑𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 💋🤍` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

case 'tonto':
if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  medidortontos = tontos[Math.floor(Math.random() * (tontos.length))]
  hasil = `💛😁 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐏𝐔𝐓𝐎𝐒 𝐓𝐎𝐍𝐓𝐎𝐒!* 😁💛\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑻𝒐𝒏𝒕𝒐 𝒑𝒂𝒚𝒂𝒔𝒐 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidortontos}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏 𝑻𝒐𝒏𝒕𝒐 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n💛🤪 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐎 𝐓𝐎𝐍𝐓𝐎 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 🤪💛` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

  case 'follarme':
if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  follarme = sexo[Math.floor(Math.random() * (sexo.length))]
  hasil = `🤤👅🥵 *¡𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!* 🥵👅🤤\n\n*¡𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚* @${mentioned[0].split('@')[0]} *${follarme}*\n\n@${mentioned[0].split('@')[0]}\n🤤🥵 *¡𝐘𝐀 𝐇𝐀 𝐒𝐈𝐃𝐎 𝐅𝐎𝐋𝐋𝐀𝐃@!* 🥵🤤` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

    case 'plana':
if (!isGroup) return reply(ind.groupo())
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  medidorplanas = planas[Math.floor(Math.random() * (planas.length))]
  hasil = `💜😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐏𝐋𝐀𝐍𝐀𝐒!* 😏💜\n\n🥺*@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑷𝒍𝒂𝒏𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorplanas}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑷𝒍𝒂𝒏𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 🥺\n\n*@${mentioned[0].split('@')[0]}*\n💜🤭 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐋𝐀𝐍𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 🤭💜` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

          case '🤫':
        case 'callate':
if (!isGroup) return reply(ind.groupo())
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  mandarcallar = callate[Math.floor(Math.random() * (callate.length))]
  hasil = `😡🤫 *¡𝐓𝐄 𝐇𝐀𝐍 𝐌𝐀𝐍𝐃𝐀𝐃𝐎 𝐀 𝐂𝐀𝐋𝐋𝐀𝐑!* 🤫😡\n\n*@${mentioned[0].split('@')[0]}*, *${mandarcallar}*\n\n*@${mentioned[0].split('@')[0]}*\n😡🥱 *¡𝐂𝐀𝐋𝐋𝐀𝐓𝐄 𝐃𝐄 𝐔𝐍𝐀 𝐏𝐔𝐓𝐀 𝐕𝐄𝐙!* 🥱😡` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

      case 'friendzone':
if (!isGroup) return reply(ind.groupo())
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  hasil = `🖤😥 *¡𝐏𝐄𝐑𝐓𝐄𝐍𝐄𝐂𝐄𝐒 𝐀 𝐋𝐀 𝐅𝐑𝐈𝐄𝐍𝐃𝐙𝐎𝐍𝐄!* 😥🖤\n\n*@${mentioned[0].split('@')[0]}*, *¡𝘼𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙨𝙚𝙧 𝙢𝙚𝙩𝙞𝙙𝙤 𝙚𝙣 𝙡𝙖 𝙁𝙧𝙞𝙚𝙣𝙙𝙕𝙤𝙣𝙚 𝙮 𝙪𝙣𝙖 𝙫𝙚𝙯 𝙦𝙪𝙚 𝙨𝙚 𝙚𝙣𝙩𝙧𝙖 𝙖𝙦𝙪𝙞́ 𝙮𝙖 𝙚𝙨 𝙢𝙪𝙮 𝙙𝙞𝙛𝙞𝙘𝙞𝙡 𝙨𝙖𝙡𝙞𝙧 𝙙𝙚 𝙡𝙖 𝙁𝙧𝙞𝙚𝙣𝙙𝙕𝙤𝙣𝙚. 𝙇𝙖𝙨 𝙢𝙪́𝙡𝙩𝙞𝙥𝙡𝙚𝙨 𝙧𝙖𝙯𝙤𝙣𝙚𝙨 𝙥𝙤𝙧 𝙡𝙖𝙨 𝙘𝙪𝙖𝙡𝙚𝙨 𝙩𝙚 𝙝𝙖𝙣 𝙢𝙚𝙩𝙞𝙙𝙤 𝙖𝙝𝙞 𝙥𝙪𝙚𝙙𝙚𝙣 𝙨𝙚𝙧 𝙚𝙨𝙩𝙖𝙨!*\n\n⚠️ *¡𝐒𝐞𝐫 𝐦𝐮𝐲 𝐏𝐞𝐬𝐚𝐝𝐨 𝐲 𝐏𝐚𝐭𝐞́𝐭𝐢𝐜𝐨!*\n⚠️ *¡𝐒𝐞𝐫 𝐝𝐞𝐦𝐚𝐬𝐢𝐚𝐝𝐨 𝐅𝐞𝐨 𝐲 𝐁𝐚𝐛𝐨𝐬𝐨!*\n⚠️ *¡𝐒𝐞𝐫 𝐮𝐧 𝐩𝐮𝐭𝐨 𝐅𝐫𝐢𝐤𝐢 𝐨 𝐏𝐚𝐲𝐚𝐬𝐨!*\n\n😕 *¡𝙃𝙖𝙮 𝙢𝙞𝙡𝙚𝙨 𝙙𝙚 𝙢𝙤𝙩𝙞𝙫𝙤𝙨 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙦𝙪𝙚 𝙥𝙤𝙙𝙧𝙞́𝙖𝙨 𝙚𝙨𝙩𝙖𝙧 𝙖𝙦𝙪𝙞 𝙥𝙚𝙧𝙤, 𝙩𝙤𝙣𝙩@𝙨 𝙘𝙤𝙢𝙤 𝙩𝙪́ 𝙣𝙤 𝙢𝙚𝙧𝙚𝙘𝙚𝙣 𝙣𝙞 𝙪𝙣𝙖 𝙧𝙖𝙯𝙤́𝙣 𝙤 𝙚𝙭𝙥𝙡𝙞𝙘𝙖𝙘𝙞𝙤́𝙣!* 😕\n\n*@${mentioned[0].split('@')[0]}*\n🖤☺️ *¡𝐓𝐄 𝐐𝐔𝐄𝐃𝐀𝐒 𝐄𝐍 𝐋𝐀 𝐅𝐑𝐈𝐄𝐍𝐃𝐙𝐎𝐍𝐄!* ☺️🖤` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

        case '🎣':
        case 'tirarcaña':
if (!isGroup) return reply(ind.groupo())
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  hasil = `🥵😏 *¡𝗧𝗘 𝗘𝗦𝗧𝗔𝗡 𝗧𝗜𝗥𝗔𝗡𝗗𝗢 𝗟𝗔 𝗖𝗔𝗡̃𝗔!* 😏🥵\n\n😳 ¡*@${mentioned[0].split('@')[0]}*, *𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙣 𝙙𝙚 𝙩𝙞𝙧𝙖𝙧 𝙡𝙖 𝙘𝙖𝙣̃𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝘽𝙤𝙩 𝙮𝙖 𝙦𝙪𝙚 𝙚𝙨𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙣𝙤 𝙨𝙚 𝙖𝙩𝙧𝙚𝙫𝙚 𝙖 𝙩𝙞𝙧𝙖𝙧𝙩𝙚 𝙤 𝙡𝙚 𝙥𝙤𝙣𝙚𝙨 𝙢𝙪𝙮 𝙣𝙚𝙧𝙫𝙞𝙤𝙨𝙞𝙩@ 𝙥𝙖𝙧𝙖 𝙝𝙖𝙘𝙚𝙧𝙡𝙤 𝙥𝙤𝙧 𝙨𝙞 𝙢𝙞𝙨𝙢𝙤!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n🥵😏💦 *¡𝐘𝐀 𝐒𝐀𝐁𝐄𝐒 𝐐𝐔𝐈𝐄𝐍 𝐄𝐒!* 💦😏🥵` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

      case 'aviso':
          if (!isGroup) return reply(ind.groupo())
          if (!isGroupAdmins) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  hasil = `⛔️😲 *¡𝐄𝐒𝐓𝐀𝐒 𝐒𝐈𝐄𝐍𝐃𝐎 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😲⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙨𝙞𝙢𝙥𝙡𝙚𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙩𝙚 𝙦𝙪𝙞𝙚𝙧𝙚𝙣 𝙩𝙤𝙘𝙖𝙧 𝙡𝙤𝙨 𝙘𝙤𝙟𝙤𝙣𝙚𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐘𝐀 𝐄𝐒𝐓𝐀𝐒 𝐀𝐕𝐈𝐒𝐀𝐃𝐎!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

      case '!aviso':

          if (!isGroup) return reply(ind.groupo())
          if (!isOwner) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  hasil = `⛔️😲 *¡𝐄𝐒𝐓𝐀𝐒 𝐒𝐈𝐄𝐍𝐃𝐎 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😲⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙨𝙞𝙢𝙥𝙡𝙚𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙩𝙚 𝙦𝙪𝙞𝙚𝙧𝙚𝙣 𝙩𝙤𝙘𝙖𝙧 𝙡𝙤𝙨 𝙘𝙤𝙟𝙤𝙣𝙚𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐘𝐀 𝐄𝐒𝐓𝐀𝐒 𝐀𝐕𝐈𝐒𝐀𝐃𝐎!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

        case 'aviso-2':

          if (!isGroup) return reply(ind.groupo())
          if (!isGroupAdmins) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  hasil = `⛔️🤔 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 🤔⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 "𝟮 𝙫𝙚𝙘𝙚𝙨" 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙜𝙪𝙣𝙙𝙖 𝙫𝙚𝙯, 𝙥𝙧𝙤𝙘𝙪𝙧𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙖𝙡𝙡𝙖 𝙪𝙣𝙖 𝙩𝙚𝙧𝙘𝙚𝙧𝙖 𝙤 𝙨𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐔𝐍𝐀 𝐌𝐀𝐒 𝐘 𝐓𝐄 𝐕𝐀𝐒 𝐅𝐔𝐄𝐑𝐀!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

          case '!aviso-2':

          if (!isGroup) return reply(ind.groupo())
          if (!isOwner) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  didin.updatePresence(from, Presence.composing)
  hasil = `⛔️🤔 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 🤔⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 "𝟮 𝙫𝙚𝙘𝙚𝙨" 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙜𝙪𝙣𝙙𝙖 𝙫𝙚𝙯, 𝙥𝙧𝙤𝙘𝙪𝙧𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙖𝙡𝙡𝙖 𝙪𝙣𝙖 𝙩𝙚𝙧𝙘𝙚𝙧𝙖 𝙤 𝙨𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐔𝐍𝐀 𝐌𝐀𝐒 𝐘 𝐓𝐄 𝐕𝐀𝐒 𝐅𝐔𝐄𝐑𝐀!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

        case 'aviso-3':

          if (!isGroup) return reply(ind.groupo())
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            /*teks = 'Orden recibida :\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }*/
            mentions(teks, mentioned, true)
            didin.groupRemove(from, mentioned)
          } else {
            mentions(`⛔️😧 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😧⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙖𝙨 𝙫𝙚𝙘𝙚𝙨 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙝𝙖𝙣 𝙙𝙚𝙘𝙞𝙙𝙞𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙩𝙚 𝙥𝙤𝙧 𝙚𝙡 𝙗𝙞𝙚𝙣 𝙙𝙚 𝙩𝙤𝙙𝙤𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⛔️😒 *¡𝐄𝐒 𝐐𝐔𝐄 𝐍𝐎 𝐀𝐏𝐑𝐄𝐍𝐃𝐄𝐒 𝐄𝐇!* 😒⛔️`, mentioned, true)
            didin.groupRemove(from, mentioned)
          }
          break

        case '!aviso-3':

          if (!isGroup) return reply(ind.groupo())
          if (!isOwner) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            /*teks = 'Orden recibida :\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }*/
            mentions(teks, mentioned, true)
            didin.groupRemove(from, mentioned)
          } else {
            mentions(`⛔️😧 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😧⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙖𝙨 𝙫𝙚𝙘𝙚𝙨 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙝𝙖𝙣 𝙙𝙚𝙘𝙞𝙙𝙞𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙩𝙚 𝙥𝙤𝙧 𝙚𝙡 𝙗𝙞𝙚𝙣 𝙙𝙚 𝙩𝙤𝙙𝙤𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⛔️😒 *¡𝐄𝐒 𝐐𝐔𝐄 𝐍𝐎 𝐀𝐏𝐑𝐄𝐍𝐃𝐄𝐒 𝐄𝐇!* 😒⛔️`, mentioned, true)
            didin.groupRemove(from, mentioned)
          }
          break

          case '💤':
        case 'buenasnoches':
    
            didin.updatePresence(from, Presence.composing)
            if (!isGroup) return reply(ind.groupo())
            if (!isGroupAdmins) return reply(mess.only.admin)
            members_id = []
            teks = (args.length > 1) ? body.slice(8).trim(): ''
            for (let mem1 of groupMembers) {
              teks += ` 😴 *¡𝑩𝒖𝒆𝒏𝒊𝒔𝒊𝒎𝒂𝒔 𝑵𝒐𝒄𝒉𝒆𝒔 𝑷𝒂𝒓𝒂 𝑻𝒊!* 😴\n💤☺️ *¡@${mem1.jid.split('@')[0]}!* ☺️💤\n\n`
              members_id.push(mem1.jid)
            }
            mentions('  💜💤 *¡𝑩𝑼𝑬𝑵𝑰𝑺𝑰𝑴𝑨𝑺 𝑵𝑶𝑪𝑯𝑬𝑺 𝑨 𝑻𝑶𝑫@𝑺!* 💤💜\n\n'+teks+'', members_id, true)
            break
            
        case '☀️':
        case 'buenosdias':
            didin.updatePresence(from, Presence.composing)
    
            if (!isGroup) return reply(ind.groupo())
            if (!isGroupAdmins) return reply(mess.only.admin)
            members_id = []
            teks = (args.length > 1) ? body.slice(8).trim(): ''
            for (let mem1 of groupMembers) {
              teks += ` 🤗 *¡𝑩𝒖𝒆𝒏𝒊𝒔𝒊𝒎𝒐𝒔 𝑫𝒊𝒂𝒔 𝑷𝒂𝒓𝒂 𝑻𝒊!* 🤗\n❄️😍 *¡@${mem1.jid.split('@')[0]}!* 😍❄️\n\n`
              members_id.push(mem1.jid)
            }
            mentions('  💜🛏️ *¡𝑩𝑼𝑬𝑵𝑰𝑺𝑰𝑴𝑶𝑺 𝑫𝑰𝑨𝑺 𝑨 𝑻𝑶𝑫@𝑺!* 🛏️💜\n\n'+teks+'', members_id, true)
            break

case 'conexion':
const timestamp = speed();
const latensi = speed() - timestamp
didin.updatePresence(from, Presence.composing)
uptime = process.uptime()
didin.sendMessage(from, `✅ *¡𝑳𝒂 𝒄𝒐𝒏𝒆𝒙𝒊́𝒐𝒏 𝒅𝒆𝒍 𝑩𝒐𝒕 𝒆𝒔 𝑬𝒔𝒕𝒂𝒃𝒍𝒆!* ✅\n\n😊 *𝑳𝒂 𝒗𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅 𝒅𝒆 𝒄𝒐𝒏𝒆𝒙𝒊𝒐́𝒏 𝒅𝒆𝒍 𝑩𝒐𝒕 𝒆𝒔 𝒅𝒆: 〔${latensi.toFixed(4)}〕* 😊`, text, {
  quoted: mek
})
break

case 'actividad':
const timestamp1 = speed();
const latensi1 = speed() - timestamp1
didin.updatePresence(from, Presence.composing)
uptime1 = process.uptime()
didin.sendMessage(from, `💚😳 *¿𝑪𝒖𝒂𝒏𝒕𝒐 𝒕𝒊𝒆𝒎𝒑𝒐 𝒍𝒍𝒆𝒗𝒂 𝒆𝒍 𝑩𝒐𝒕 𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐?* 😳💚\n\n➦ 😌 *〔${kyun(uptime1)}〕* ⌚`, text, {
  quoted: mek
})
break


        case 'add-gay':
  if (!isGroup) return reply(ind.groupo())
  if (!isOwner) return reply(ind.ownerb())
          addp = body.slice(10)
          topgays.push(`${addp}@s.whatsapp.net`)
          fs.writeFileSync('./tops/topgays.json', JSON.stringify(topgays))
          reply(`😳 *¡𝑨𝒄𝒂𝒃𝒂𝒔 𝒅𝒆 𝑨𝒏̃𝒂𝒅𝒊𝒓 𝒂 𝒖𝒏 𝑵𝒖𝒆𝒗𝒐 𝑴𝒂𝒍𝒅𝒊𝒕𝒐 𝑴𝒂𝒓𝒊𝒄𝒐́𝒏 𝒂𝒍 𝑻𝑶𝑷!* 😳`)
          break
        case 'del-gay':
  if (!isGroup) return reply(ind.groupo())
  if (!isOwner) return reply(ind.ownerb())
          oh = body.slice(11)
          delp = topgays.indexOf(oh)
          topgays.splice(delp, 1)
          fs.writeFileSync('./tops/topgays.json', JSON.stringify(topgays))
          reply(`🥺 *¡𝑨𝒄𝒂𝒃𝒂𝒔 𝒅𝒆 𝑬𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒂 𝒖𝒏 𝑵𝒖𝒆𝒗𝒐 𝑴𝒂𝒍𝒅𝒊𝒕𝒐 𝑴𝒂𝒓𝒊𝒄𝒐́𝒏 𝒂𝒍 𝑻𝑶𝑷!* 🥺`)
          break

    case 'top-gays':
  if (!isGroup) return reply(ind.groupo())
          didin.updatePresence(from, Presence.composing) 
          teks = `😳🏳️‍🌈 *¡𝑻𝑶𝑷 𝑫𝑬 𝑴𝑨𝑳𝑫𝑰𝑻𝑶𝑺 𝑴𝑨𝑹𝑰𝑪𝑶𝑵𝑬𝑺!* 🏳️‍🌈😳\n\n😂 *¡𝑬𝒏 𝒆𝒔𝒕𝒆 𝑻𝑶𝑷, 𝒔𝒐𝒍𝒐 𝒆𝒔𝒕𝒂𝒏 𝒍𝒐𝒔 𝒎𝒂́𝒔 𝑴𝒂𝒓𝒊𝒄𝒐𝒏𝒆𝒔 𝒅𝒆 𝒕𝒐𝒅𝒐 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐, 𝒖𝒏𝒐𝒔 𝑴𝑨𝑳𝑫𝑰𝑻𝑶𝑺 𝑴𝑨𝑹𝑰𝑪𝑶𝑵𝑬𝑺 𝑫𝑬 𝑽𝑬𝑹𝑫𝑨𝑫!* 😂\n\n••••••••••••••••••••••••••••••••••••••••••••••\n`
          no = 0
          for (let prem1 of topgays) {
            no += 1
            teks += `*〔𝑻𝑶𝑷 ${no.toString()} 🏆〕*\n🧑🏻🏳️‍🌈: @${prem1.split('@')[0]}\n••••••••••••••••••••••••••••••••••••••••••••••\n`
          }
          teks += `\n😳🏳️‍🌈 *¡𝑯𝑨𝒀 〔${topgays.length}〕 𝑴𝑨𝑳𝑫𝑰𝑻𝑶𝑺 𝑴𝑨𝑹𝑰𝑪𝑶𝑵𝑬𝑺!* 🏳️‍🌈😳`
          didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": topgays}})
          break 

                case 'addprem':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isOwner) return reply('*anda siapa? ini hanya untuk owner*')
					adpr = body.slice(10)
					premium.push(`${adpr}@s.whatsapp.net`)
					fs.writeFileSync('./ANBOT-D/didin.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan ${adpr} Ke Daftar Premium`)
				await limitAdd(sender)
					break
				case 'dellprem':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isOwner) return reply(ind.ownerb())
					din02 = body.slice(11)
					delp = premium.indexOf(din02)
					premium.splice(delp, 1)
					fs.writeFileSync('./ANBOT-D/didin.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus ${din02} Dari Daftar Premium`)
					await limitAdd(sender)
					break					
					case 'premiumlist':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					didin.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					teks = `*JUMLAH USER PREMIUM*\n`
					no = 0
					for (let premi of premium) {
						no += 1
						teks += `${no.toString()} @${premi.split('@')[0]}\n`
					}
					teks += `Jumlah User Premium : ${premium.length}\n *${pushname}*`
					didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					await limitAdd(sender)
					break
				case 'dompet':
         if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				
				break
 case 'ytplaymp3':
   case 'ytplaymp4':
              if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    dinnnnnnnnnp = await fetchJson(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&q=${query}`)
                    dinnnnnnnnnp = dinnnnnnnnnp.result
                     dinn =`TITLE = ${dinnnnnnnnnp.title}\nSIZE = ${dinnnnnnnnnp.size}`
                    gambary = await getBuffer(dinnnnnnnnnp.thumbnail)
                    didin.sendMessage(from, gambary, image, { quoted: mek, caption: dinn })
                    get_audio = await getBuffer(dinnnnnnnnnp.url_audio)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${dinnnnnnnnnp.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(dinnnnnnnnnp.url_video)
                    didin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${dinnnnnnnnnp.title}.mp4`, quoted: mek})
                    await limitAdd(sender)
                    break
				case 'joox':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
    if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    jooxbydidin = await fetchJson(`https://api.xteam.xyz/dl/jooxdl?lagu=${query}&APIKEY=${XteamD}`)
                    jooxbydidin = jooxbydidin.result
                    didinbot = `Title : ${jooxbydidin.songname}\nArtists : ${jooxbydidin.singers}\nDuration : ${jooxbydidin.duration}\nAlbum : ${jooxbydidin.album}\nUkuran : ${jooxbydidin.filesize}\nke : ${jooxbydidin.ext}\n`
                    thumbnail = await getBuffer(jooxbydidin.album_url)
                    didin.sendMessage(from, thumbnail, image, { quoted: mek, caption: didinbot })
                    get_audio = await getBuffer(jooxbydidin.download_url)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${jooxbydidin.songname}.mp3`, quoted: mek})
                    await limitAdd(sender)
                    break
				case 'darkjoke':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 didin.sendMessage(from, darkjokes, image, {quoted: mek, caption: '*~SENTER MANA SENTER~*'})
				await limitAdd(sender)
				break
				case 'meme':
				  case 'memeindo':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/meme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 didin.sendMessage(from, memeall, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
                await limitAdd(sender)
				break
				  case 'bokunh':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/bokunohero.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 bokunohero = await getBuffer(randKey.result)
                 didin.sendMessage(from, bokunohero, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
                 await limitAdd(sender)
				break
				  case 'sao':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 didin.sendMessage(from, swordartonline, image, {quoted: mek, caption: '*swort art online*\n*YT = HADIR_HMM*'})
                 await limitAdd(sender)
				break
				  case 'hsdxd':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 didin.sendMessage(from, highschooldxd, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
                 await limitAdd(sender)
				break
				  case 'lovelive':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 didin.sendMessage(from, lovelive, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
                 await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
				buffer = await getBuffer(anu.result.result)
				didin.sendMessage(from, buffer, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
				await limitAdd(sender)
				break
				case 'ppcouple':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/ppcouple.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					Laki = await getBuffer(randKey.result.laki)
					didin.sendMessage(from, Laki, image, didinanbot, { caption: '*_YT = HADIR_HMM_*', quoted: mek })
		      Cewe = await getBuffer(randKey.result.cewek)
					didin.sendMessage(from, Cewe, image, didinanbot, { caption: '*_YT = HADIR_HMM_*', quoted: mek })
				await limitAdd(sender) 
					break
case 'anime':
  case 'animerandom':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./ANIME/anime.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					Anime = await getBuffer(randKey.result.ranime)
					didin.sendMessage(from, Anime, image, didinanbot, { caption: '*_YT = HADIR_HMM_*', quoted: mek })
				await limitAdd(sender) 
					break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
				if (args.length < 1) return reply(`contoh : ${prefix}transfer ${tujuantf}|${jumblah}`)
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(`contoh = ${prefix}daftar ${pushname}|17`)
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('*UMUR KAMU HARUS BERUPA ANGKA*')       
                if (namaUser.length >= 30) return reply(`*WHY, YOUR NAME NDAK BISA BAHASA INGGRIS*`)
                if (umurUser > 20) return reply(`*UMUR KAMU TERLALU TUA*`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA*`)
                logo = fs.readFileSync(`./src/logo.jpg`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await didin.sendMessage(from, logo, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    reply('Terima Kasih')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await didin.sendMessage(from, logo, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[DAFTAR anBOT-D]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply(`mau beli berapa? misal 1 atau 2 dst, harga perlimit 500 Contoh ${prefix + command} 3`)
				payout = body.slice(10)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*pengirim* : ANBOT-D\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
  
case 'stikerr':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`http://lolhuman.herokuapp.com/api/convert/towebp?apikey=7ed90d537ab5edddb6ba6465&img=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, sticker, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
	case 'removebg':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
	  var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
case 'gtavposter':
case 'pencil':
case 'pencildrawing':
case 'burneffect':
case 'crossgun':
case 'customwp':
case 'nightbeach':
case 'raindrop':
case '3dlinephoto':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?urlgbr=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
	case 'comunism':
	  case 'trigger':
	    case 'rotate':
	      case 'delete':
	        case 'tobecontinue':
	          case 'thuglife':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
	case 'ttp':
	  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
	  ini_didin = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp3?apikey=${apiKey}&text=${body.slice(5)}`)
	  didin.sendMessage(from, ini_didin, sticker, {quoted: mek})
	  await limitAdd(sender)
	  break
			  case 'attp':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
            teks = args.join(" ")
					buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					didin.sendMessage(from, buffer, sticker, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'tts':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return didin.sendMessage(from, `Diperlukan kode bahasa!! untuk melihat list bahasa, ketik ${prefix}bahasa`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return didin.sendMessage(from, 'teksnya mana?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('teksnya kepanjangan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							didin.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
    
					case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: \n*${prefix}next* — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: \n*${prefix}next* — find a new partner`)
        	break
case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						didin.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    didin.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(enmedia)
					await didin.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya')
					break 
				case 'tiktokstalk':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
try {
						if (args.length < 1) return didin.sendMessage(from, 'USERNAMENYA MANA?', text, {quoted: mek})
          hmm = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tiktok-stalk?name=${body.slice(12)}&apikey=${leysKey}`)
					buffer = await getBuffer(hmm.result.user.avatarLarger)

					hasil = `Nickname : ${hmm.result.user.nickname}\nPengikut : ${hmm.result.stats.followerCount}\nMengikuti : ${hmm.result.stats.followingCount}\nBio : ${hmm.result.user.signature}\nVerified : ${hmm.result.user.verified}`
					didin.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[NTAHLAH] MUNGKIN USERNAMENYA TIDAK VALID')
					}
					await limitAdd(sender)
					break
   
				case 'igstalk':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				try {
						if (args.length < 1) return didin.sendMessage(from, 'USERNAMENYA MANA?', text, {quoted: mek})
hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}`)
					buffer = await getBuffer(hmm.data.profilehd)

					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					didin.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[NTAHLAH] MUNGKIN USERNAMENYA TIDAK VALID')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await didin.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    didin.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                var value = body.slice(8)
                var group = await didin.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                didin.sendMessage(from, options, text)
                await limitAdd(sender)
                break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await didin.chats.all()
					didin.setMaxListeners(25)
					for (let _ of anu) {
						didin.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 didin.updatePresence(from, Presence.composing) 
				 didin.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					didin.blockUser (`${body.slice(7)}@c.us`, "add")
					didin.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    didin.blockUser (`${body.slice(9)}@c.us`, "remove")
					didin.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
        anu = await didin.groupLeave(from, `Bye Semua Member *${groupMetadata.subject}*`, groupId)
        break
					case 'gombal':
       if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = gombal[Math.floor(Math.random() * (gombal.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*~GOMBAL ANBOT-D~*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'qmuslim':
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = muslim[Math.floor(Math.random() * (muslim.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*~ANBOT-D~*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'rdoadl':
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = tahlil[Math.floor(Math.random() * (tahlil.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*~ANBOT-D~*', text, {quoted: mek})
						await limitAdd(sender)
					break
			case 'hapus':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
					didin.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					didin.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						didin.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						didin.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break  
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                didin.groupUpdateSubject(from, `${body.slice(9)}`)
                didin.sendMessage(from, 'SUKSES MENGGANTI NAMA GROUP,TAPI ANDA KOK KOK REBAHAN SAMBIL KAKI KALIAN DI ATAS KAKI LAINNYA', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                didin.groupUpdateDescription(from, `${body.slice(9)}`)
                didin.sendMessage(from, 'SUKSES MENGGANTI DESC,TAPI ANDA KOK KOK REBAHAN SAMBIL KAKI KALIAN DI ATAS KAKI LAINNYA', text, {quoted: mek})
					break
					case 'wait':
					  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await didin.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							didin.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						})
					} else {
						reply('Foto aja')
					}
					await limitAdd(sender)
					break
					case 'simi':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					teks = body.slice(6)
					anu = await fetchJson(`https://videfikri.com/api/simsimi/?teks=${teks}`, {method: 'get'})
					simii = `*${anu.result.jawaban}*`
					didin.sendMessage(from, simii, text, didinanbot, {quoted: mek})
					await limitAdd(sender) 
					break 
           				case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan dari admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat anda menjadi member :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						didin.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`kasihan si @${mentioned[0].split('@')[0]}, tapi maaf anda harus jadi member`, mentioned, true)
						didin.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						didin.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub`, mentioned, true)
						didin.groupMakeAdmin(from, mentioned)
					}
					break	

			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					didin.sendMessage(from, `Mari Kita Membaca “Al-Fatihah”`, text)
					}, 8000)
					setTimeout( () => {
					reply('BERHASIL')
					}, 7000)
					setTimeout( () => {
					didin.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					didin.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					didin.sendMessage(from, 'Makan Makan Kita', text)
					}, 2500)
					setTimeout( () => {
					reply('Sedang memantau')
					}, 0)
					break
case 'tomp3':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                	didin.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya ❌')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						didin.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'tagme':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
          await costum(`@${sender.split('@')[0]}`, text, `@${sender.split('@')[0]}`)
          await limitAdd(sender)
				break
					case 'tovideo':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					  if (!isQuotedSticker) return reply('*Reply stikernya')
					  anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					  anum = await didin.downloadAndSaveMediaMessage(anumedia)
					  ran = getRandom('.webp')
					  exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
					    fs.unlinkSync(anum)
					    if (err) return reply('Gagal, pada saat mengkonversi sticker ke Video')
					    buffer = fs.readFileSync(ran)
					    didin.sendMessage(from, buffer, video, {quoted: mek, caption: 'Buat apa sii..'})
					    fs.unlinkSync(ran)
					    })
					    await limitAdd(sender)
					    break
				case 'toimg':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						didin.sendMessage(from, buffer, image, {quoted: mek, caption: 'ini '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
               			case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				    uptime = process.uptime()
          costum(help(pushname, prefix, getLevelingLevel, getLevelingXp, premi, sender, reqXp, simihh, antiVirtexx, antiLinkk, badWordd, nsfww, welcomee, kyun, _registered, uangku), text, didinanbot, cr)
                    break
			
				  case 'sedekah':
            var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "SEDEKAH ANBOT-D"
         var gambard = await getBuffer("https://i.ibb.co/vxHvJ9z/IMG-20210329-WA0599.jpg")
         const replyp = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, donasi(prefix), text, replyp)
					  break

                case 'level':
		case 'lvl':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               didin.sendMessage(from, resul, text, didinanbot, vr,{ quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${didinlimit - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses anBOT-D`)
                }
					break
		case 'rules':
                    if (!isRegistered) return reply(ind.noregis())
                   costum( rules(prefix), text, didinanbot, cr)
                    break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./ANBOT-D/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
                			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('salah')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./ANBOT-D/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
					
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./ANBOT-D/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./ANBOT-D/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./ANBOT-D/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
              reply(`untuk Mengaktifkan ketik ${prefix + command} enable dan untuk Menonaktif ketik ${prefix + command} disable`)
                }
					break

case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./ANBOT-D/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
						didin.sendMessage(from,`PERINGATAN!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./ANBOT-D/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
					case 'owner':
                  didin.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  didin.sendMessage(from, 'Tuh kontak owner anBOT-D kalau mau sv chat aja',MessageType.text, didinanbot, vr, { quoted: mek} )
		const NTAHLAH = fs.readFileSync('./sticker/NTAHLAH');
                didin.sendMessage(from, NTAHLAH, MessageType.image, {quoted: mek, caption: '*STOP MIKIRIN VIDEO PERUSAK GENERASI KAWAN, AMBILLAH CANGKULMU ADUK ADONAN SEMEN ITU DAN MARI MENYUSUN BATU BATA BERSAMAKU*'})
                 break
		break    
				case 'bug':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(4)
                      if (pesan.length > 300) return didin.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[BUG]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    didin.sendMessage('6285298595430@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner ANBOT-D, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                case 'req':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau request apa?`)
                     const cfrr = body.slice(4)
                      if (cfrr.length > 300) return didin.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
                     var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    didin.sendMessage('6285298595430@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner ANBOT-D, Requests yang dapat membebani owner  tidak akan ditanggapi.')
                    break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = didin.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *SAYA*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block* : ${blocked.length}\n*Bot aktif selama* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					didin.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
			case 'animesaran2':
                                        if (!isRegistered) return reply(ind.noregis())
var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "MENU ANIMESARAN"
         var gambard = await getBuffer("https://i.ibb.co/F0sYQck/IMG-20210329-WA0605.jpg")
         const replydp = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, animesaran2(prefix), text, replydp)
                                        break
				case 'animesaran':
                                        if (!isRegistered) return reply(ind.noregis())
 var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "MENU ANBOT-D"
         var gambard = await getBuffer("https://i.ibb.co/F0sYQck/IMG-20210329-WA0605.jpg")
         const rep = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, animesaran(prefix), text, rep)
                                        break
					case 'bahasa':
					  if (!isRegistered) return reply(ind.noregis())
        var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "MENU BAHASA"
         var gambard = await getBuffer("https://i.ibb.co/LJqBRGH/IMG-20210329-WA0589.jpg")
         const repl = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, bahasa(prefix), text, repl)
					  break
case 'alquran':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apiKey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
		case 'quranaudio':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran?apiKey=${ZeksApi}`, {method: 'get'})
					faktaaa = `*Nama* : *${anu.result.nama}*\n*Arti* : *${anu.result.arti}*\n*Nomor* : *${anu.result.nomor}*\n*Tipe* : *${anu.result.type}*\n*Ayat* : *${anu.result.ayat}*\n*Isi* : *${anu.result.keterangan}*`
					quu = await getBuffer(anu.result.audio)
					didin.sendMessage(from, faktaaa, text, {quoted: mek})
					didin.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
					await limitAdd(sender) 
					break
			case 'listsurah':
					if (!isRegistered) return reply(ind.noregis())
					didin.sendMessage(from, listsurah() , text, didinanbot, cr)
					break
                  case 'mining':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isPrem) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 100000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
case 'wattpadsearch':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${apiKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
case 'stickergif':
			case 'stikergif':
			case 'gifstiker':
			case 'gifsticker':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await didin.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								didin.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await didin.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								didin.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix + command} atau reply/tag gambar`)
					}
			    break
			case 'qrcode':
			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return didin.sendMessage(from, 'NTAHLAH', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			didin.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break

case 'tahta':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Contoh : ${prefix}tahta ANBOT-D`)
buffer = await getBuffer(`http://zekais-api.herokuapp.com/hartatahta?text=${body.slice(7)}`)
didin.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'minato':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					didin.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break
case 'kucing':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kucing`, {method: 'get'})
										ku = JSON.parse(JSON.stringify(anu));
					ci =  ku[Math.floor(Math.random() * ku.length)];
					nye = await getBuffer(ci)
					didin.sendMessage(from, nye, image, { caption: 'kucing', quoted: mek })
					await limitAdd(sender)
					break
					case 'aot':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+attack+on+titan`, {method: 'get'})
					ti = JSON.parse(JSON.stringify(anu));
					tan =  ti[Math.floor(Math.random() * ti.length)];
					nye = await getBuffer(tan)
					didin.sendMessage(from, nye, image, { caption: '*YT = HADIR_HMM*', quoted: mek })
					await limitAdd(sender)
					break
					case 'tokyoghoul':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Tokyo+Ghoul`, {method: 'get'})
						tokyo = JSON.parse(JSON.stringify(anu));
					ghoul =  tokyo[Math.floor(Math.random() * tokyo.length)];
					nye = await getBuffer(ghoul)
					didin.sendMessage(from, nye, image, { caption: 'YT = HADIR_HMM', quoted: mek })
					await limitAdd(sender)
					break
					case 'sagiri':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+Izumi+Sagiri`, {method: 'get'})
						sag = JSON.parse(JSON.stringify(anu));
					iri =  sag[Math.floor(Math.random() * sag.length)];
					nye = await getBuffer(iri)
					didin.sendMessage(from, nye, image, { caption: 'SAGIRI CHAN', quoted: mek })
					await limitAdd(sender)
					break
					case 'cantik':
					  case 'cans':
					case 'cecen':
					  case 'cecan':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Cewe+Cantik`, {method: 'get'})
						ce = JSON.parse(JSON.stringify(anu));
					cen =  ce[Math.floor(Math.random() * ce.length)];
					nye = await getBuffer(cen)
					didin.sendMessage(from, nye, image, { caption: 'PUNYAKU KAWAN', quoted: mek })
					await limitAdd(sender)
					break
					case 'cogan':
					    case 'tampan':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Orang+indonesia+Ganteng`, {method: 'get'})
						cog = JSON.parse(JSON.stringify(anu));
					an =  cog[Math.floor(Math.random() * cog.length)];
					nye = await getBuffer(an)
					didin.sendMessage(from, nye, image, { caption: 'GANTENG SEPERTI SAYA', quoted: mek })
					await limitAdd(sender)
					break
				case 'chika':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					chi = JSON.parse(JSON.stringify(anu));
					ka =  chi[Math.floor(Math.random() * chi.length)];
					nye = await getBuffer(ka)
					didin.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'kurumi':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					didin.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					didin.sendMessage(from, nye, image, { caption: '*KANEKI*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'touka':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					didin.sendMessage(from, nye, image, { caption: '*TOUKA*', quoted: mek })
					await limitAdd(sender) 
					break 
case 'neko':
  case 'nekonime':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./ANIME/neko.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 nekoo = await getBuffer(randKey.result)
                 didin.sendMessage(from, nekoo, image, {quoted: mek, caption: '*YT* = *HADIR_HMM*'})
				break
case 'naruto':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
										naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					didin.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break
case 'loli':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./ANIME/loli.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 loliii = await getBuffer(randKey.result)
                 didin.sendMessage(from, loliii, image, {quoted: mek, caption: '*YT* = *HADIR_HMM*'})
                 await limitAdd(sender)
				break
			case 'waifu':
				    try {
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					didin.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
await limitAdd(sender) 

					break
					case 'lizard':
             try {
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					didin.sendMessage(from, buf, image, {quoted: mek,caption: "ANBOT-D"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
         await limitAdd(sender) 
					break
                case 'listbadword':
                    let lbw = `Ini adalah list BADWORD\nTotal : ${katakasar.length}\n`
                    for (let i of katakasar) {
                        lbw += `➸ ${i.replace(katakasar)}\n`
                    }
                    await reply(lbw)
                    break 
 case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./ANBOT-D/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./ANBOT-D/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
                }
                break
                case 'bisakah':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
         bisakah = body.slice(1)
					const di =['Bisa','Tidak Bisa','Coba Ulangi']
					const din = di[Math.floor(Math.random() * di.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ din, text, { quoted: mek })
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                  await limitAdd(sender)
                  break
        case 'kapankah':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					kapankah = body.slice(1)
					const dinp =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lagi','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const didinpn = dinp[Math.floor(Math.random() * dinp.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ didinpn, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'pantun':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					const pantunn =['Buah pisang buat tomat\nDisimpan di dalam lumbung padi\nPantas baunya menyengat\nTernyata kamu belum mandi','Jalan-jalan ke Kolaka\nSungguh kelak-kelok jalannya\nSyariat Islam jalan kita\nHadits Nabi sebagai petunjuknya','Kalau sauh di pohon randu\nNanti akan jadi benalu\nKalau jauh merasa rindu\Kalau dekat merasa malu','Bunga-bunga sangat indah\nSungguh indah ada lebah\nJangan mencampur amal ibadah\nDengan musyrik ataupun bid’ah','Naik delman\nMau ke taman\nDia tampan\nTapi sayang, jerawatan','Jalan-jalan ke Kenya\nTetap saja makan roti\nIbadah hanya kepada-Nya\nNiat bersih ikhlas hati','Beribu-ribu burung gelatik\nHanya satu berwarna lurik\nBeribu-ribu gadis yang cantik\nHanya kamu yang paling menarik','Pergi ke pantai bersama\nPulangnya berdua\nIbadah di dunia tiada lama\nAkan selesai saat ajal tiba','Bola pingpong\nDimakan gelatik\nBiar ompong\nYang penting cantik','Sangat lapar menjelang siang\nTerik sekali hingga ada bayang-bayang\nAgama tegak karena tiang\nTiangnya adalah sembayang','Jual tanah tak laku-laku\nTentu hati terasa pilu\nKalau saja engkau terima cintaku\nAh langsung saja ke penghulu','Mama baik pergi ke pasar\nSungguh senang tertawa lebar\nBangunlah di saat fajar\nTunaikan subuh dengan sabar','Pagi-pagi baca koran\nKurang nikmat kalau tanpa kopinya\nAku tak peduli banyak Tuhan\nTuhanku Tuhan Yang Maha Esa','Ajak pacar makan di restauran\nBertemu mantan yang sekarang teman\nHati bingung dan gak karuan\nTernayata mantan minta balikan','Ada lagu judul bang Thoyib\nGak pulang-pulang apakah mati syahid?\nDengar dentum adzan Maghrib\nSegeralah pergi ke Masjid','Pergi ke kota Tuban\nBuat beli buah rambutan\nMantan udah masuk pelaminan\Kenapa kamu masih sendirian','Kapal laut kapal selam\nKena ombak goyang-goyang.\nTidak siang tidak malam\nHanya wajahmu yang terbayang','Narok uang di dalam saku\nSakunya robek gara-gara kuku\nJangan sampai ko menghianatiku\nKarena hanya kau yang selalu ada di hatiku','Lintah datang dari kali\nKalau ke darat langsung mati\nTatapanmu tajam sekali\nSampai-sampai menusuk hati','Tanam mangga tanam kemangi\nSapu halaman hingga bersih\nIndahnya warna warni pelangi\nLebih indah wajahmu kekasih','Batik bukan sembarang baik\nBatik seperti kayu gelam\nCantik bukan sembarang cantik\nCantik dirimu luar dan dalam']
					const pengirim = pantunn[Math.floor(Math.random() * pantunn.length)]
					didin.sendMessage(from, pengirim, text, { quoted: mek })
					await limitAdd(sender)
				        break
					case 'watak':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
				        case 'jadian':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					hmmd = []
					const dinjdn = groupMembers
					const didinhm = groupMembers
					const sayadin = dinjdn[Math.floor(Math.random() * dinjdn.length)]
					const diadin = didinhm[Math.floor(Math.random() * didinhm.length)]
					teks = `Ciee cieee yang lagi jadian @${sayadin.jid.split('@')[0]} ️💜 @${diadin.jid.split('@')[0]} `
					hmmd.push(sayadin.jid)
					hmmd.push(diadin.jid)
					mentions(teks, hmmd, true)
					await limitAdd(sender)
					break
                case 'gantengcek':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					didin.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ewe':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
ganteng = body.slice(5)
					const ew =['TOBAT KAWAN, INGAT, JANGAN MERUSAK GENERASI GENERASI BANGSA YANG BUKAN JODOH ANDA, KASIHAN YANG JODOH DIA, EHH DAH DI REVIEW AMA ORANG LAIN']
					const we = ew[Math.floor(Math.random() * ew.length)]
					didin.sendMessage(from, ''+ganteng+''+ we +'', text, { quoted: mek })
					break
      case 'cantikcek':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					didin.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					await limitAdd(sender)
					break
               case 'terganteng':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					didinpur = []
					const gatn = groupMembers
					const te = groupMembers
					const ng = gatn[Math.floor(Math.random() * gatn.length)]
					teks = `Yang terganteng di grub ini adalah @${ng.jid.split('@')[0]}`
					didinpur.push(ng.jid)
					mentions(teks, didinpur, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					didinpur = []
					const ca = groupMembers
					const nt = groupMembers
					const ik = ca[Math.floor(Math.random() * ca.length)]
					teks = `Yang tercantik di grub ini adalah @${ik.jid.split('@')[0]}`
					didinpur.push(ik.jid)
					mentions(teks, didinpur, true)
					await limitAdd(sender)
					break	
               case 'terpintar':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					didinpur = []
					const dinpurn = groupMembers
					const haykawan = groupMembers
					const pintarrr = dinpurn[Math.floor(Math.random() * dinpurn.length)]
					teks = `Terpintar di grup ini adalah @${pintarrr.jid.split('@')[0]}`
					didinpur.push(pintarrr.jid)
					mentions(teks, didinpur, true)
					await limitAdd(sender)
					break	
					case 'kisahnabi':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			    if (args.length < 1) return reply('kisah nama siapa?')
			        anu = await fetchJson(`https://videfikri.com/api/religi/kisahnabi/?nabi=${body.slice(11)}`, {method: 'get'})
              gambar0 = await getBuffer(anu.result.image)
			        tekss = `Nama = ${anu.result.nama}\ntahun lahir = ${anu.result.tahun_kelahiran}\nusia = ${anu.result.usia}\nTempat lahir = ${anu.result.tempat_lahir}\nKisah = ${anu.result.description}`
			        didin.sendMessage(from, gambar0, image, {quoted: mek, caption: tekss})
			        await limitAdd(sender)
			        break
		    case 'mimpi':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
          query = args.join(" ")
          if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (args.length < 1) return reply('mimpi apa??')
			        anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${body.slice(7)}`)
			        didin.sendMessage(from, anu.result.artimimpi, text, {quoted: mek})
					await limitAdd(sender) 
			       	break
					case 'quotes':
					  
				didin.updatePresence(from, Presence.composing) 
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./didin/quotes.js');
                   jsonData = JSON.parse(data);
                   randIndex = Math.floor(Math.random() * jsonData.length);
                   randKey = jsonData[randIndex];
                   randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                   didin.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break
					case 'cerhor':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/ceritahoror.js');
        cerh = JSON.parse(data);
				horor = Math.floor(Math.random() * cerh.length);
				randKey = cerh[horor];
				Ceritahoror = randKey.result.Ceritahoror
					didin.sendMessage(from, Ceritahoror, text, didinanbot, reply, {quoted: mek })
					await limitAdd(sender)
					break
					case 'sindiran':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/sindiran.js');
        sind = JSON.parse(data);
				iranbot = Math.floor(Math.random() * sind.length);
				randKey = sind[iranbot];
				Sindiran = randKey.result.Sindiran
					didin.sendMessage(from, Sindiran, text, didinanbot, {quoted: mek })
					await limitAdd(sender)
					break
					case 'jamdunia':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jam-dunia?q=${body.slice(10)}&apikey=${leysKey}`, {method: 'get'})
					anu = anu.result.jam
					jamdunia = `Wib : ${anu.wib}\nWita : ${anu.wita}\nWit : ${anu.wit}\n\nMatahari : ${anu.matahari}\Tanggal : ${anu.tanggal}\nDetail : ${anu.detail}`
					didin.sendMessage(from, jamdunia, text, {quoted: mek})
					await limitAdd(sender)
					break
					case 'doge':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/anjing?apikey=${leysKey}`)
					dogee = await getBuffer(anu.result)
					didin.sendMessage(from, dogee, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
					await limitAdd(sender)
					break
				case 'artinama':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Apa yang mau dicari?')
					anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${body.slice(10)}`)
					didin.sendMessage(from, anu.result.arti, text, {quoted: mek})
					await limitAdd(sender) 
					break
                case 'simih':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
				_samih.push(from)
				fs.writeFileSync('./ANBOT-D/simi.json', JSON.stringify(_samih))
				reply('Sukses mengaktifkan mode simi di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				_samih.splice(from, 1)
				fs.writeFileSync('./ANBOT-D/simi.json', JSON.stringify(_samih))
				reply('Sukes menonaktifkan mode simi di group ini ✔️')
				} else {
				reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
				}
				break
					case 'itr':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			var media = await  didin.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n│\n*│• URL :* ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
			didin.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
			})
			await limitAdd(sender) 	
			break
                case 'addbucin':
					if (!isOwner) return reply(ind.ownerb())
				huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./ANBOT-D/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
					break
				case 'tebakgambar':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/tebakgambar.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					didin.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 menit lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			case 'tebakkata':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/tebakkata.js');
        tebak = JSON.parse(data);
				kata = Math.floor(Math.random() * tebak.length);
				randKey = tebak[kata];
				Pertanyaan = '*➸ Pertanyaan :* \n```'+randKey.result.soal +'```'
					setTimeout( () => {
					didin.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 Menit lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, Pertanyaan, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			case 'ceramah':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/ceramah.js');
        cera = JSON.parse(data);
				mahdin = Math.floor(Math.random() * cera.length);
				randKey = cera[mahdin];
				ceramah = randKey.result.ceramah
					didin.sendMessage(from, ceramah, text, {quoted: mek })
					await limitAdd(sender)
					break
					case 'asupan':
					  //saya didin, ini wm cuyy
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
data = fs.readFileSync('./src/didin.js');
        asupann = JSON.parse(data);
				didingantengg = Math.floor(Math.random() * asupann.length);
				randKey = asupann[didingantengg];
				videoo = await getBuffer(randKey.result)
				  didin.sendMessage(from, videoo, video, {mimetype: 'video/mp4', filename: `asupan_dari_didin_ganteng.mp4`, quoted: mek, caption: 'asupannya'})
				  await limitAdd(sender)
					break
					case 'setprefix':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply(`mau di ubah ke apa? *contoh* ${prefix + command} /`)
					prefix = args[0]
					reply(`*Sukses Mengubah prefix Menjadi* : ${prefix} *Jangan Lupa Untuk Tersenyum*`)
					break 
				case 'caklontong':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					didin.sendMessage(from, Jawaban, text, {quoted: mek})
					}, 60000)
					setTimeout( () => {
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 300000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 Menit lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					didin.sendMessage(from, Pertanyaan, text, {quoted: mek})
					await limitAdd(sender) 
				break

				case 'family100':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/family100.js');
fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					didin.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 Menit lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'pinterest':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(10)}`, {method: 'get'})
										pin = JSON.parse(JSON.stringify(anu));
					hadirhmm =  pin[Math.floor(Math.random() * pin.length)];
					nye = await getBuffer(hadirhmm)
					didin.sendMessage(from, nye, image, { caption: 'DIDIN, SAYA DIDIN', quoted: mek })
					await limitAdd(sender)
					break
					case 'bucin':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
						didin.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
						await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const tte = ra[Math.floor(Math.random() * ra.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ tte+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'porncomen':
             if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					mgs = body.slice(11)
pub = await getBuffer(`https://api.zeks.xyz/api/phub?apiKey=${ZeksApi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=ANBOT-D&msg=${mgs}`)
didin.sendMessage(from, pub, image, {caption: 'PORNHUB COMMENT', quoted: mek})

					await limitAdd(sender)

					break
                    case 'nulis':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`${name} Harus Nulis Apa??`)
				nuliss = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nuliss}&apikey=${ZeksApi}`)
				didin.sendMessage(from, buffer, image, {caption: '*_YT = HADIR_HMM_*', quoted: mek})
				await limitAdd(sender)
				break
					case 'tumur':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					query = args.join(" ")
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
           if (args.length < 1) return reply('yang mau di tebak umurnya siapa?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apiKey=${apiKey}&name=${body.slice(7)}`, {method: 'get'})
				result =	`Nama = ${anu.result.name}\nUmur = ${anu.result.age}`
					didin.sendMessage(from, result, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'tlight':
     if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
				din056 = body.slice(8)
					din056 = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${din056}&apiKey=${ZeksApi}`)
					didin.sendMessage(from, din056, image, {caption: 'Light Text', quoted: mek})
					await limitAdd(sender)
					break
					case 'gtext':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					gte = `${body.slice(7)}`
					te1 = gte.split("|")[0];
					te2 = gte.split("|")[1];
					gte = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${te1}&text2=${te2}&apikey=${ZeksApi}`)
					didin.sendMessage(from, gte, image, {caption: 'Glitch Text', quoted: mek})
					await limitAdd(sender)
					break 
					case 'coffee':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('textnya mana?')
					reply('*Harga = 50.000*')
					didin = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${body.slice(8)}`)
					didin.sendMessage(from, didin, image, {caption: 'jangan lupa untuk selalu tersenyum', quoted: mek})
					await limitAdd(sender)
					break
					case 'breakwall':
					case 'matrix':
					case 'bneon':
					case 'text3dbox':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
                    textm = args.join(" ")
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&text=${textm}`)
                    didin.sendMessage(from, buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'leavest':
                      case 'logobp':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
                    textm = args.join(" ")
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${textm}&apikey=${ZeksApi}`)
                    didin.sendMessage(from, buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
					case 'shadowt':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
					anbot = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${body.slice(9)}`)
					didin.sendMessage(from, anbot, image, {caption: 'SHADOW TEXT', quoted: mek})
					await limitAdd(sender)
					break 
                    case 'spamgmail':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} contoh@gmail.com`)
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda%20sebesar%20500000%20Ribu%20Rupiah%20ya`, {method: 'get'})
			didin.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender)
                    break
					case 'spamsms':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
          reply('Wait..')
      nomor = `${body.slice(8)}`
			anu = await fetchJson(`https://alfians-api.herokuapp.com/api/spamsms?no=${nomor}&jum=20`, {method: 'get'})
			didin.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
await limitAdd(sender)
break
					case 'spamcall':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Contoh ${prefix + command} 85298643558`)
          reply('Wait..')
      call = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			didin.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
        await limitAdd(sender)
                     break
    case 'didin':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Contoh : ${prefix}didin ANBOT-D`)
dinb = `${body.slice(7)}`
din6 = dinb.split("|")[0];
din7 = dinb.split("|")[1];
dinb = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${din6}&text2=${din7}`)
didin.sendMessage(from, dinb, image, {caption: 'SAYA DIDIN', quoted: mek})
await limitAdd(sender)
break
					case 'pornhub':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
					porn = `${body.slice(8)}`
					hub1 = porn.split("|")[0];
					hub2 = porn.split("|")[1];
					porn = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${hub1}&text2=${hub2}&APIKEY=${XteamD}`)
					didin.sendMessage(from, porn, image, {caption: 'PORNHUB', quoted: mek})
					await limitAdd(sender)
					break 
					case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
					  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
                    teka = args.join(" ")
                    didinpur = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${teka}&APIKEY=${XteamD}`)
                    didin.sendMessage(from, didinpur, image, { quoted: mek})
                    await limitAdd(sender)
                    break
			case 'husbu':
				didin.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					 data = fs.readFileSync('./src/husbu.js');
        		         jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
					await limitAdd(sender)
				break

		case 'darkneon':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}darkneon didin`)
			darkn = body.slice(9)
			darkne = await getBuffer(`https://videfikri.com/api/textmaker/darkneon/?text=${darkn}`)
			didin.sendMessage(from, darkne, image, {quoted: mek, caption: 'DARKNEON'})
			await limitAdd(sender)
			break
			case 'woodblock':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}woodblock didin`)
		 didin120 = body.slice(11)
			din120 = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${didin120}`)
			didin.sendMessage(from, din120, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'paper':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}paper didin`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
			didin.sendMessage(from, glass, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'ytmp3':
   case 'ytmp4':
if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/uodAdkNAd10`)
                    query = body.slice(7)
                    didinnp = await fetchJson(`https://api.zeks.xyz/api/${command}?url=${query}&apikey=${ZeksApi}`)
                    didinnp = didinnp.result
                     dinn =`TITLE = ${didinnp.title}\nSIZE = ${didinnp.size}`
                    gambary = await getBuffer(didinnp.thumbnail)
                    didin.sendMessage(from, gambary, image, { quoted: mek, caption: dinn })
                    get_audio = await getBuffer(didinnp.url_audio)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${didinnp.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(didinnp.url_video)
                    didin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${didinnp.title}.mp4`, quoted: mek})
                    
                    break
				case 'chord':    
               			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                		reply(ind.wait)
                		if (args.length < 1) return reply('judul lagu sangat di perlukan')
					teks = body.slice(7)
					anu = await fetchJson(`https://videfikri.com/api/chord/?query=${teks}`, {method: 'get'})
					reply('chord dari lagu '+teks+' adalah :\n\n'+anu.result.chord)
					await limitAdd(sender) 
					break

					
				case 'lirik':    
               			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                		if (args.length < 1) return reply('judul lagu sangat di perlukan')
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
					case 'antivirtex':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiVirtex) return reply('SUDAH AKTIF')
						antivirtex.push(from)
						fs.writeFileSync('./ANBOT-D/antivirtex.json', JSON.stringify(antivirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						didin.sendMessage(from,`PERINGATAN : Jangan kirim virtex`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiVirtex) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./ANBOT-D/antivirtex.json', JSON.stringify(antivirtex))
						reply('SUKSES MEMATIKAN ANTI VIRTEX DI GROUP')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break

//sound
case 'sound1':
const irimp3 = fs.readFileSync('./assets/dj1.mp3');
didin.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound2':
const pa = fs.readFileSync('assets/dj2.mp3')
didin.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
const soun = fs.readFileSync('assets/dj3.mp3')
didin.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound4':
satu = fs.readFileSync('./assets/dj4.mp3');
didin.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
dua = fs.readFileSync('./assets/dj5.mp3');
didin.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
tiga = fs.readFileSync('./assets/dj6.mp3');
didin.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
empat = fs.readFileSync('./assets/dj7.mp3');
didin.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
lima = fs.readFileSync('./assets/dj8.mp3');
didin.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
enam = fs.readFileSync('./assets/dj9.mp3');
didin.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
enam = fs.readFileSync('./assets/dj10.mp3');
didin.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
dj11 = fs.readFileSync('./assets/dj11.mp3');
didin.sendMessage(from, sound11, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound12':
dj12 = fs.readFileSync('./assets/dj12.mp3');
didin.sendMessage(from, dj12, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
dj13 = fs.readFileSync('./assets/dj13.mp3');
didin.sendMessage(from, dj13, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound14':
dj14 = fs.readFileSync('./assets/dj14.mp3');
didin.sendMessage(from, dj14, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
const dj15 = fs.readFileSync('./assets/dj15.mp3');
didin.sendMessage(from, dj15, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound16':
const dj16 = fs.readFileSync('assets/dj16.mp3')
didin.sendMessage(from, dj16, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
const dj17 = fs.readFileSync('assets/dj17.mp3')
didin.sendMessage(from, dj17, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound18':
dj18 = fs.readFileSync('./assets/dj18.mp3');
didin.sendMessage(from, dj18, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
dj19 = fs.readFileSync('./assets/dj19.mp3');
didin.sendMessage(from, dj19, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
dj20 = fs.readFileSync('./assets/dj20.mp3');
didin.sendMessage(from, dj20, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
dj21 = fs.readFileSync('./assets/dj21.mp3');
didin.sendMessage(from, dj21, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
dj22 = fs.readFileSync('./assets/dj22.mp3');
didin.sendMessage(from, dj22, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
dj23 = fs.readFileSync('./assets/dj23.mp3');
didin.sendMessage(from, dj23, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
dj24 = fs.readFileSync('./assets/dj24.mp3');
didin.sendMessage(from, dj24, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dj25 = fs.readFileSync('./assets/dj25.mp3');
didin.sendMessage(from, dj25, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound26':
dj26 = fs.readFileSync('./assets/dj26.mp3');
didin.sendMessage(from, dj26, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
dj27 = fs.readFileSync('./assets/dj27.mp3');
didin.sendMessage(from, dj27, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound28':
dj28 = fs.readFileSync('./assets/dj28.mp3');
didin.sendMessage(from, dj28, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound29':
dj29 = fs.readFileSync('./assets/dj29.mp3');
didin.sendMessage(from, dj29, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'listsound':
					  case 'soundmenu':
					    case 'menusound':
if (!isRegistered) return reply(ind.noregis())

        var wadidin = "0@s.whatsapp.net"

        var anbotdidin = "MENU SOUND"
         var gambard = await getBuffer("https://i.ibb.co/DMCnjQ5/gtext.jpg")
         const bedareply = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, sound(prefix), text, bedareply)
					  break
break
					default:
			if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama`)
                  }
       if (budy.includes(`@34632246602`)) {
                  reply(`Jangan Tag Didin, Dia Lagi Sibuk🗣`)
                  }

			 
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ANBOT-D]','aqua'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
			}

		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	