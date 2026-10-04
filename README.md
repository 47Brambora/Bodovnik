# Táborový systém pro správu bodů a časů

Oficiální offline webová aplikace pro správu bodů, disciplín a časových měření na dětských táborech, soustředěních a sportovních akcích.  
Aplikace je navržena pro bleskové offline použití na jakémkoliv notebooku. Funguje přímo ve webovém prohlížeči a jako hlavní databázi využívá standardní soubory Excel (`.xlsx`), což eliminuje nutnost instalovat Python, databázové servery nebo řešit blokování antivirem.

## Hlavní funkce

 - Souborový Systém na bázi Excelu (`.xlsx`):  
    - Každý ročník nebo akce má svůj vlastní Excel soubor (např.: `tabor_2026.xlsx`), který slouží zároveň jako vstupní databáze i výstupní blok s výsledky.  
    - Kdykoliv lze soubor otevřít přímo v Microsoft Excelu, vytisknout nebo ručně upravit.  
 - Správa účastníků (Dětí):  
    - Náhled a přehledná evidence účastníků rozdělených do kategorií **A** až **E**.  
    - Automatické načtení seznamu účastníků ze základního listu v Excelu.  
 - Bodové disciplíny:  
    - Rychlé zadávání a zpětná úprava bodů s okamžitou odezvou bez načítání stránky.
 - Časové discipliny s intervalovými starty:
    - Živí dopočet: Nastavení výchozího startu a pevného intervalu (např.: minuta). Čistý  čas se dopočítává okamžitě po zadání cíle.  
    - Ruční úprava startu: Možnost u konkrétního účastníka ručně přepsat startovní čas.  
    - Checkbox pro zpoždění: Volba, zda se ruční posun startu automaticky propíše do všech následujících startů v řadě, nebo zůstane izolovaný pouze pro daného účastníka.
 - 100% Offline provoz bez instalace:
    - Běží lokálně v prohlížeči (Chrome, Brave, Firefox, ...) bez připojení k internetu či Wi-Fi.
 - Přímí export do `.xlsx`:
    - Jedním kliknutím stáhne aktualizovaný Excel soubor se všemi dopočítanými výsledky a formátováním pro vedení akce.  

## Architektura a technologie

 - Uživatelské rozhraní: HTML
 - Styling: Tailwind CSS (responzivní a přehledné tabulkové zobrazení)
 - Práce s Excelem: SheetJS(`xlsx.js`) - kompletní offline čtení a zápis `.xlsx`  
 - Běhové prostředí: Jakýkoliv běžný webový prohlížeč

## Návod na použití

Pro správnou funkci aplikace je potřeba mít v počítači nainstalovaný **Python** (pro lokální spuštění serveru).

### 1. Stažení aplikace

1. Přejděte na stránku [GitHub Releases](https://github.com/47Brambora/Bodovnik/releases/latest).
2. V sekci nejnovější verze stáhněte zdrojový archiv **Source code (zip)**.
3. Stažený ZIP soubor rozbalte na plochu vašeho počítače.

### 2. Spuštění aplikace

Uvnitř rozbalené složky se nachází jednoduchý spouštěcí soubor:
- **Pro Windows:** Dvakrát klikněte na soubor **`start.bat`**.
- **Pro Linux:** Spusťte soubor **`start.sh`** (v terminálu nebo přes správce souborů s povoleným spuštěním).

Skript automaticky zapne lokální server a otevře táborový systém ve vašem webovém prohlížeči.

<!--
### 1. Rychlá instlace přez terminál (Doporučeno)

Otevřete svůj terminál a vložte následující příkazy dle OS:  
**Linux (Bash):**  
```bash
curl -O https://github.com/47Brambora/Bodovnik/releases/latest/download/install.sh && chmod +x install.sh && ./install.sh
```  
**Windows (PowerShell)**
```PowerShell
Invoke-WebRequest -Uri "[https://github.com/47Brambora/Bodovnik/releases/latest/download/install.bat](https://github.com/47Brambora/Bodovnik/releases/latest/download/install.bat)" -OutFile "install.bat"; .\install.bat
```

### 2. Instalace přez webový prohlížeč

Pokud nechceme používat terminál můžeme stáhnout instalační script ručně:  
1. Stáhněte si instalační soubor dle vašeho OS z [Release](https://github.com/47Brambora/Bodovnik/releases/latest):  
 - Pro Windows: [install.bat](https://github.com/47Brambora/Bodovnik/releases/latest/download/install.bat)  
 - Pro Linux: [install.sh](https://github.com/47Brambora/Bodovnik/releases/latest/download/install.sh)  
3. Spusťte soubor dvojklikem (V Linuxu je potřeba ještě povolit spuštění skriptu).  
3. Skript se automaticky postará o instalaci. Jenom ještě odpovíte na pár nezbytných otázek
-->
