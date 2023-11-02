###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 


åde type och interface i TypeScript används för att definiera egna typer, men det finns viktiga skillnader och likheter mellan de två.
Likheter:
Objektstrukturer: både type och interface kan användas för att definiera formen på ett objekt, exempelvis:
type PointType = { x: number; y: number }; interface PointInterface { x: number; y: number; }