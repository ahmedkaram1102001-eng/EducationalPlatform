import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  texts = [
    { title: "مرحباً بكم في منصتنا التعليمية", text: "نقدم أفضل تجربة تعليمية للطلاب." },
    { title: "تعلم بسهولة وبخطوات بسيطة", text: "نوفر أدوات حديثة تساعدك على الفهم." },
    { title: "انضم إلينا الآن", text: "تعلم بطريقة ممتعة ومتطورة." }
  ];

  currentIndex = 0;

  currentTitle = this.texts[0].title;
  currentText = this.texts[0].text;

  isFadingOut = false;
  isFadingIn = false;

  changeText(nextIndex: number) {
    this.isFadingOut = true;

    setTimeout(() => {
      this.currentIndex = nextIndex;
      this.currentTitle = this.texts[nextIndex].title;
      this.currentText = this.texts[nextIndex].text;

      this.isFadingOut = false;
      this.isFadingIn = true;

      setTimeout(() => {
        this.isFadingIn = false;
      }, 400);

    }, 400);
  }

  nextText() {
    const next = (this.currentIndex + 1) % this.texts.length;
    this.changeText(next);
  }

  prevText() {
    const prev = (this.currentIndex - 1 + this.texts.length) % this.texts.length;
    this.changeText(prev);
  }
  ngAfterViewInit() {
  const items = document.querySelectorAll('.scroll-anim');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(el => observer.observe(el));
}

}
