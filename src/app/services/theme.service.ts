import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

const THEME_KEY = 'app-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const savedTheme = localStorage.getItem(THEME_KEY) as 'light-theme' | 'dark-theme';
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.applyTheme(this.currentTheme);
    localStorage.setItem(THEME_KEY, this.currentTheme);
  }

  applyTheme(theme: 'light-theme' | 'dark-theme') {
    const body = document.body;
    this.renderer.removeClass(body, 'light-theme');
    this.renderer.removeClass(body, 'dark-theme');
    this.renderer.addClass(body, theme);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
