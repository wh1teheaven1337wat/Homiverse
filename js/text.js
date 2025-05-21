class text {
    constructor(el, arr) {
        this.el = el;
        this.arr = arr;
        this.arrIndex = 0;
        if (!this.el || !this.arr) return;

        this._init();
    }

    _deleteText(txt) {
        return new Promise((resolve) => {
        let i = 0;
        this.content = txt.split('');

        this.interval = setInterval(() => {
            this.newContent = '';
            this.content.forEach((element, index) => {
                if (index !== this.content.length - 1) {
                    this.newContent += element;
                }
            })
            this.content = this.newContent.split('');
            this.el.textContent = this.newContent;
            if (this.content.length == 0) {
                clearInterval(this.interval);
                resolve();
            }
        }, 95);
    });
    }

    _writeText(txt) {
        return new Promise((resolve) => {
        let i = 0;
        this.el.textContent = '';
        this.broken = txt.split('');

        this.interval = setInterval(() => {
            this.el.textContent += this.broken[i];

            i++;

            if (i >= this.broken.length) {
                clearInterval(this.interval);
                setTimeout(async () => {
                    await this._deleteText(txt);
                    resolve();
                }, 1000);
            }
        }, 195);
    });
    }

    async _while() {
        await this._writeText(this.arr[this.arrIndex])
        if (this.arrIndex == this.arr.length - 1) {
            this.arrIndex = 0;
        } else {
            this.arrIndex++;
        }
        await this._while();
    }

    async _init() {
        await this._while();
    }
}

const root = document.querySelector('.text');

new text(document.querySelector('.text_02'), ["Самый пиздатый сервер в Garry’s mod!", "Лучшая администрация!", "Фембойчики ^w^"]);