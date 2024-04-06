
    /*
    1. render song 
    2. scroll top 
    3. play / pause / seek 
    4. cd rotate 
    5. next / prev 
    6. random 
    7. next / repeat 
    8. active song 
    9. scroll active song into view 
    10. play song when click 
    */
    const courseApi = "http://localhost:3000/courses"

    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const heading = $('header h2')
    const cdThumb = $('.cd-thumb')
    const audio = $('#audio')
    const cd = $('.cd')
    const playBTN = $('.btn-toggle-play')
    const player = $('.player')
    const progress = $('#progress') 
    const nextBTN = $('.btn-next')
    const prevBTN = $('.btn-prev')
    const randomBtn = $('.btn-random')
    const repeatBTN = $('.btn-repeat')
    const playList = $('.playlist')
    const active = $('.active')
    const PLAYER_STORAGE = 'NHACCUAKHOA_PLAYER'
    const volBar = $('.volume-bar')
    const muteBtn = $('.icon-mute')
    const unmuteBtn = $('.icon-unmute')

    const app ={ 
        curIndex  : 0, 
        isPlaying : false,
        isRandom  : false,
        isRepeat  : false,
        lockVol   : 0,
        curVol    : 1,
        config    : JSON.parse(localStorage.getItem(PLAYER_STORAGE)) || {},
        songs     : [
            {
                name: 'Dân chơi sao phải khóc',
                singer: 'Andree Right Hand', 
                path: './assets/music/Andree Right Hand - Dân Chơi Sao Phải Khóc ft. RHYDER, WOKEUP - Official MV.mp3',
                image: 'https://img.youtube.com/vi/zDNOhR-Ms-I/maxresdefault.jpg' 
            },{
                name: 'Đánh Đổi',
                singer: 'Obito FT MCK', 
                path: './assets/music/Obito - Đánh Đổi ft. MCK.mp3',
                image: 'https://img.youtube.com/vi/vPz8ftK_4bk/maxresdefault.jpg' 
            },{
                name: 'NOLOVENOLIFE',
                singer: 'HIEUTHUHAI (prod. by Kewtiie)', 
                path: './assets/music/HIEUTHUHAI - NOLOVENOLIFE (prod. by Kewtiie) [Official Lyric Video].mp3',
                image: 'https://img.youtube.com/vi/F084mTHtBpI/maxresdefault.jpg' 
            },{
                name: 'TOKYO Cypher',
                singer: 'Lil Wuyn, 16 BrT, 16 Typh', 
                path: './assets/music/Lil Wuyn, 16 BrT, 16 Typh - TOKYO Cypher.mp3',
                image: 'https://img.youtube.com/vi/TFmq8zuHBm4/maxresdefault.jpg' 
            },{
                name: 'Đầu Đường Xó Chợ',
                singer: 'Obito ft. Lăng LD', 
                path: './assets/music/Obito - Đầu Đường Xó Chợ ft. Lăng LD.mp3',
                image: 'https://img.youtube.com/vi/xRL2BspFnOs/maxresdefault.jpg' 
            },{
                name: 'Chịu cách mình nói thua',
                singer: 'RHYDER ft. BAN x COOLKID', 
                path: './assets/music/RHYDER - CHỊU CÁCH MÌNH NÓI THUA - ft. BAN x COOLKID - OFFICIAL MUSIC VIDEO.mp3',
                image: 'https://img.youtube.com/vi/dm5-tn1Rug0/maxresdefault.jpg' 
            }
            ,{
                name: 'Chillin',
                singer: 'charlieonnafriday', 
                path: "./assets/music/Chillin'.mp3",
                image: 'https://img.youtube.com/vi/SCsGHmOhrkA/maxresdefault.jpg' 
            }
            ,{
                name: 'No Boundary',
                singer: 'D. ICY ft. Obito', 
                path: "./assets/music/Richie D. ICY - No Boundary ft. Obito (Official Music Video).mp3",
                image: 'https://img.youtube.com/vi/yptflB597IQ/maxresdefault.jpg' 
            }
            ,{
                name: 'ILYMAMA',
                singer: 'Wxrdie (ft. @QNTOfficial) [prod. Central Pham]', 
                path: "./assets/music/Wxrdie - ILYMAMA (ft. @QNTOfficial) [prod. Central Pham].mp3",
                image: 'https://img.youtube.com/vi/8DV-S9w7hu0/maxresdefault.jpg' 
            }
            ,{
                name: 'Rolling',
                singer: 'Richie D. ICY & AXTROBOY', 
                path: './assets/music/Richie D. ICY & AXTROBOY - Rolling (Official Music Video).mp3',
                image: 'https://img.youtube.com/vi/tzEvWO4jugI/maxresdefault.jpg' 
            }
        ], 
        setConfig(key, value){
            this.config[key] = value
            localStorage.setItem(PLAYER_STORAGE , JSON.stringify(this.config))
        },
        loadConfig(){
            this.isRandom = this.config.isRandom
            this.isRepeat = this.config.isRepeat
            this.lockVol  = this.config.lockVol
            this.curVol   = this.config.curVol

        },
        render(){ 
            const htmls = this.songs.map((song, index) => {
                return `
                <div class="song ${index === this.curIndex ? 'active' : ''}" data-index = "${index}">
                        <div class="thumb" style="background-image: url(${song.image});"></div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                            <ul class="menuOption">
                                <li>Edit</li>
                                <li>Remove</li>
                            </ul>
                        </div>
                    </div>
                `
            })
            $('.playlist').innerHTML = htmls.join('')
        },
        handleEvent(){
            const _this = this
            // xu li cd quay/ dung 
            const cdThumbAnimate = cdThumb.animate([
                {transform: 'rotate(360deg)'} // 360 do
            ],{
                duration: 100000, 
                iterations: Infinity, //quay vo han
            })
            cdThumbAnimate.pause()

            const cdWidth = cd.offsetWidth // lấy chiều ngang
            // xu ly phong to / thu nho cd
            document.onscroll = () => {
                // console.log(window.scrollY) // scroll là kéo Y là trục dọc
                // console.log(document.documentElement.scrollTop)  tương tự cái ở trên
                const scrollTop = window.scrollY || document.documentElement.scrollTop
                const newCDWidth = cdWidth - scrollTop
                cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0 
                // nếu newCDWidth lớn hơn 0 thì dùng newCDWidth còn k thì về 0 
                cd.style.opacity = newCDWidth / cdWidth
            }

            // xu ly khi  click play
            playBTN.onclick = () => { 
                if(_this.isPlaying){
                    audio.pause()
                    _this.isPlaying = !_this.isPlaying
                    player.classList.toggle('playing', _this.isPlaying)
                    cdThumbAnimate.pause()

                }else{ 
                    audio.play()
                    _this.isPlaying = !_this.isPlaying
                    player.classList.toggle('playing', _this.isPlaying)
                    cdThumbAnimate.play()

                }
            }

            // khi tien do bai hat thay doi
            audio.ontimeupdate = () => {
                if (audio.duration){ 
                    const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100)  
                    progress.value = progressPercent
                    document.documentElement.style.setProperty('--range', progress.value);
                }
            }

            // xu li khi tua bai hat 
            progress.onchange = (e) => { 
                const seekTime = e.target.value / 100 * audio.duration
                audio.currentTime = seekTime
            }

            // xu li khi next bai hat
            nextBTN.onclick = () =>  { 
                // xoa class active
                $('.playlist .active').classList.remove('active')

                // chuyen bai
                if(_this.isRandom){
                    _this.playRandomSong()
                } else{
                    _this.nextSong()
                }
                if (player.classList.contains('playing')){
                    audio.play()
                }else{ 
                    audio.play()
                    _this.isPlaying = true 
                    player.classList.add('playing') 
                    cdThumbAnimate.play()
                }
                
                // them class active
                $$('.playlist .song')[_this.curIndex].classList.add('active')
                _this.scrollToActiveSong()
            }
            
            // xu li khi prev 
            prevBTN.onclick = () =>  { 
                $('.playlist .active').classList.remove('active')         
                if(_this.isRandom){
                    _this.playRandomSong()
                } else{
                    _this.prevSong()
                }
                if (player.classList.contains('playing')){
                    audio.play()
                }else{ 
                    audio.play()
                    _this.isPlaying = true 
                    player.classList.add('playing') 
                    cdThumbAnimate.play()
                }
                $$('.playlist .song')[_this.curIndex].classList.add('active')
                _this.scrollToActiveSong()
            }

            // xu li khi random 
            randomBtn.onclick = () => {
                _this.isRandom = !_this.isRandom
                _this.setConfig('isRandom', _this.isRandom) 
                randomBtn.classList.toggle('active', _this.isRandom)
                
                if(_this.isRepeat){
                    _this.isRepeat = false
                    _this.setConfig('isRepeat', _this.isRepeat);
                    repeatBTN.classList.remove('active');
                }
            }

            // xu li khi repeat
            repeatBTN.onclick = () => {
                _this.isRepeat = !_this.isRepeat
                _this.setConfig('isRepeat', _this.isRepeat)
                repeatBTN.classList.toggle('active', _this.isRepeat)

                if(_this.isRandom){
                    _this.isRandom = false
                    _this.setConfig('isRandom', _this.isRandom);
                    randomBtn.classList.remove('active');
                }
            }


            // xu li nextSong khi audio ended
            audio.onended = () => {
                if (_this.isRepeat){
                    audio.play()    
                }else{
                    nextBTN.click()
                }
            };
            
            // xu li khi nhan playlist  
            playList.onclick = (e) => {
                const songNode = e.target.closest('.song:not(.active)')
                const optionSong = e.target.closest('.option') 
                if (songNode && !optionSong){
                    $('.playlist .active').classList.remove('active')
                    _this.curIndex = Number(songNode.dataset.index) // lấy tất cả các element con của .song trừ active và .option
                    
                    if(songNode){
                        $$('.song')[_this.curIndex].classList.add('active')
                        _this.loadCurrentSong()
                        audio.play()
                        _this.isPlaying = true 
                        player.classList.add('playing') 
                        cdThumbAnimate.play()
                    }
                }
                else if(optionSong){
                    optionSong.querySelector('.menuOption').classList.toggle('open')
                } 
                if (!optionSong) {
                    $$('.menuOption').forEach(option => {
                        option.classList.remove('open');
                    })
                }
            }   

            // mute
            unmuteBtn.onclick = () => { 
                unmuteBtn.style.visibility = 'hidden' 
                muteBtn.style.visibility = 'visible'
                
                volBar.value = 0
                this.setConfig('lockVol', audio.volume)
                audio.volume = 0
                this.setConfig('curVol', audio.volume)
            }

            //unmute
            muteBtn.onclick = () => { 
                unmuteBtn.style.visibility = 'visible' 
                muteBtn.style.visibility = 'hidden'
                
                volBar.value = audio.volume = this.config.lockVol 
                this.setConfig('curVol', audio.volume)
                this.setConfig('lockVol', this.config.curVol)
            }

            //Change-Volume
            volBar.oninput = () => {
                audio.volume = volBar.value
                this.config.lockVol = this.config.curVol = audio.volume
                if (volBar.value === 0){ 
                    muteBtn.style.visibility = "visible"
                    unmuteBtn.style.visibility = 'hidden'
                } else {
                    muteBtn.style.visibility = "hidden"
                    unmuteBtn.style.visibility = 'visible'
                }
            }        
        },
        defineProperties() {
            Object.defineProperty(this,'currentSong', {
                get: () => { 
                    return this.songs[this.curIndex]
                }
            })
            // tạo phương thức currentSong
        },
        loadCurrentSong(){      
            heading.textContent = this.currentSong.name
            cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
            audio.src = this.currentSong.path
        },
        nextSong(){
            this.curIndex ++
            if(this.curIndex >= this.songs.length ){
                this.curIndex = 0
            }
            this.loadCurrentSong()                                                                                                   
        },
        prevSong(){
            this.curIndex --
            if(this.curIndex < 0){
                this.curIndex = this.songs.length - 1
            }
            this.loadCurrentSong()    
        },
        listRandom: [],
        playRandomSong() {
            if (this.listRandom.length === this.songs.length)
            {
                this.listRandom = []
            }
            do{ 
                this.curIndex = Math.floor(Math.random() * this.songs.length)
            } while (this.listRandom.includes(this.curIndex))
            this.listRandom.push(this.curIndex)
            console.log(this.listRandom)
            this.loadCurrentSong()
        },
        scrollToActiveSong(){
            setTimeout(() => { 
                $('.song.active').scrollIntoView({
                    behavior: 'smooth', // hành vi mượt 
                    block: 'end'
                })
            }, 100)
        },
        start() { 
            this.loadConfig()
            // định nghĩa các thuộc tính cho obj
            this.defineProperties()

            // lắng nghe xử lí các sự kiện
            this.handleEvent()
            
            // load danh sách bài hát
            this.render()

            // tải thông tin bài hát đầu tiên khi tải giao diện ứng dụng
            this.loadCurrentSong()

            // hien thi trang thai ban dau cua repeat random
            repeatBTN.classList.toggle('active', this.isRepeat)
            randomBtn.classList.toggle('active', this.isRandom)
        }    
    } 
    app.start()
