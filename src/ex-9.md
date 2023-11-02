### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?


Generics är ett sätt att fixa kompomter som kan jobba med olika datatyper , att du inte förlorar typinformationen, Generics tilåter dig att skriva kod som är typesäker och återanvändbar. så du behöver inte hårdkoda specifika typer i en funktion klass eller interfacee, då kan du använda en placeholder som ofta är (T) som du kan sedan ersätta med konkret typ eller använding .

exempel
function identity(arg: any): any { return arg;
}
