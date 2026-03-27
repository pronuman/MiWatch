import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header>
      {/* Твоя кастомная часть шапки */}
      <div class="header-title">
        <a href="/"><h1>MiWatch-Wiki</h1></a>
        <p>Техническая энциклопедия устройств Xiaomi</p>
      </div>

      {/* Стандартные компоненты: Поиск и переключатель темы */}
      {children.length > 0 ? <div class="header-controls">{children}</div> : null}
    </header>
  )
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* Распределяем заголовок и кнопки по краям */
  justify-content: space-between; 
  margin: 2rem 0;
  gap: 1.5rem;
}

.header-title h1 {
  margin: 0;
  font-size: 1.5rem;
}

.header-title p {
  margin: 0;
  font-size: 0.8rem;
  color: var(--gray);
}

.header-title a {
  text-decoration: none;
  color: var(--dark);
}

.header-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* На мобилках переносим кнопки под заголовок, если не влезают */
@media all and (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }
}
`

export default (() => Header) satisfies QuartzComponentConstructor