
## ⌚ Xiaomi Wearable Wiki & Watchfaces 1

Добро пожаловать в открытую базу знаний по носимым устройствам экосистемы **Xiaomi**. Здесь собрана техническая документация, инструкции по настройке и руководства по созданию циферблатов.

---

## 🚀 Быстрый старт

> [!TIP] Если вы здесь впервые, загляните в раздел **[Основы создания циферблатов](https://www.google.com/search?q=watchfaces/basics.md)**, чтобы понять структуру графических ресурсов и JSON-конфигов.

---

## 📱 Устройства (Модельный ряд)

Ниже представлены основные линейки устройств. Нажмите на модель, чтобы перейти к её спецификациям и туториалам.

|Линейка|Актуальные модели|Особенности|
|---|---|---|
|**Xiaomi Smart Band**|[Smart Band 9](https://www.google.com/search?q=devices/mi-band-9.md), [Smart Band 8](https://www.google.com/search?q=devices/mi-band-8.md), [7](https://www.google.com/search?q=devices/mi-band-7.md)|Самая популярная серия, проприетарные ОС|
|**Redmi Watch / Band**|[Redmi Watch 4](https://www.google.com/search?q=devices/redmi-w4.md), [Redmi Band 2](https://www.google.com/search?q=devices/redmi-b2.md)|Бюджетный сегмент, свои форматы циферблатов|
|**Xiaomi Watch**|[Xiaomi Watch S3](https://www.google.com/search?q=devices/watch-s3.md), [Watch 2 Pro](https://www.google.com/search?q=devices/watch-2p.md)|HyperOS и WearOS модели|

---

## 🎨 Создание циферблатов (Development)

Разработка визуального интерфейса для часов требует понимания ограничений железа.

### 🛠 Инструменты

- **[EasyFace](https://www.google.com/search?q=tools/easyface.md)** — официальный редактор от Xiaomi.
    
- **[WatchFace Designer](https://www.google.com/search?q=tools/wf-designer.md)** — сторонний софт для глубокой кастомизации.
    
- **[Скрипты упаковки](https://www.google.com/search?q=tools/scripts.md)** — утилиты для сборки `.bin` или `.watch` файлов.
    

### 📚 Гайды по разработке

- **Графика:** [Оптимизация иконок и PNG](https://www.google.com/search?q=dev/graphics.md).
    
- **Анимация:** [Работа с секвенциями](https://www.google.com/search?q=dev/animation.md).
    
- **AOD:** [Создание режима Always-on Display](https://www.google.com/search?q=dev/aod.md) (экономия заряда).
    

---

## ❓ Часто задаваемые вопросы (FAQ)

- **[Как установить кастомный циферблат?](https://www.google.com/search?q=faq/install.md)**
    
- **[Различия между Global и CN версиями](https://www.google.com/search?q=faq/regions.md)**
    
- **[Восстановление после неудачной прошивки](https://www.google.com/search?q=faq/recovery.md)**
    

---

## 🛠 Технический уголок (Для контрибьюторов)

Проект строится на базе **Quartz 4**. Если вы хотите дополнить Wiki:

1. Создайте `.md` файл в соответствующей папке.
    
2. Используйте теги `#manual` или `#watchface` для автоматической сортировки.
    
3. Проверьте отображение таблиц перед пушем в Git.