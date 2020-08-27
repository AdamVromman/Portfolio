import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

let nl = 
{
  "lang":"nl",
  "future":"Toekomst",
  "projects":"Projecten",
  "adam":"Adam",
  "contact":"Contact",
  "thanks":"veel dank aan mijn goede vriendin, @MerelMatthys, voor het trekken van de foto's.",

  "internship":"Stage",
  "job":"Job",
  "internshipP1":"Het einde van mijn opleiding nadert. Maar voor ik kan afstuderen, rest mij nog een laatste opdracht. De meest impactvolle, grootste, maar ook spannendste opdracht in dit hoofdstuk van mijn leven. Een stage van drie maanden lang, waarin ik vijf dagen per week meewerk in een bedrijf naast volwaardige developers. En alsof dit allemaal nog niet intens genoeg is, kies ik ervoor om die stage in het buitenland te doen. Er zijn weinig dingen waar ik zo naar uitkijk en zo enthousiast over ben als drie maanden in het buitenland te gaan wonen en werken.",
  "internshipP2":"Ik heb op dit moment nog geen bedrijf gevonden, maar de stage is gepland voor maart 2021, dus ik ben er van overtuigd dat ik tijdig het perfecte bedrijf op de perfecte plek ga vinden. De landen waar ik contacten tracht te leggen zijn IJsland, Noorwegen en Japan. IJsland is een prachtig land dat ik extreem graag zou willen ontdekken. Noorwegen daarentegen heb ik al deels ontdekt, waardoor het vertrouwd en verwelkomend aanvoelt. Japan is een volledig andere cultuur en zou van de drie de meeste aanpassing vereisen. Maar ik ben zeker dat dat het helemaal waard zou zijn.",
  "jobP1":"Aangezien ik nog niet afgestudeerd ben, ben ik nog niet op zoek naar een job. Ik sta wel open voor een vakantie- of studentenjob die te combineren is met mijn studie.",

  "past":"Verleden",
  "present":"Huidig",
  "madonna":"Madonna",
  "madonnaP":"Sinds 2018 is er in het hartje van Gent een geweldig, nieuw restaurant te vinden. Het restaurant, uitgebaat door drie fantastische dames, waarvan één mijn moeder is, is gespecialiseerd in vergeten groenten, lokale bieren en feesten in alle maten. Ik kreeg de vraag of het mogelijk was om een website te creëren voor hen. Ik zei dat ik zeker wou helpen. Aangezien ik nog studeer en ik familie ben van één van de eigenaars is het project relatief informeel, maar ik hoop toch iets te kunnen creëren naar de wensen van mijn cliënten dat ook het warme en gezellige gevoel uitstraalt van Madonna zelf.",
  "merel":"Merel",
  "merelP":"Merel Matthys is filmmaker en fotografe. We besloten elkaar uit de nood te helpen. Zij hielp mij met foto's maken voor deze website, ik zou haar helpen met haar portfolio. Dit bleek één van mijn favoriete opdrachten te zijn. Een website proberen maken die er goed uitziet maar de focus legt op de foto's en films die er op staan is niet iets dat ik in mijn opleiding zie. Het is een leerproces voor mij én voor Merel, maar dat maakt het des te interessanter. De website is nog niet af, dus die is nog niet publiek, maar de github wel.",
  "bikeapp":"BikeApp",
  "bikeappP":"Voor de lessen web applicaties IV moesten we een Angular project maken dat gebruik maakt van een RESTful API. We mochten zelf kiezen wat het onderwerp van onze website was, dus ik koos voor het maken en repareren van fietsen. Ik heb zelf al meerdere fietsen gemaakt en het is een onderwerp dat mij erg interesseert. Perfect om een interactieve en informatieve website over te maken. Ik heb nog een interesse kunnen gebruiken door ongebruikelijke grafische elementen te implementeren in mijn website en die zelf te maken. Het was een leuk project en ik heb er van genoten om zelf dingen uit te zoeken en te leren werken met het Angular framework. De website staat niet online, maar de Github repository is wel publiek.",
  "bikes":"Fietsen",
  "bikesP":"Dit is niet IT gerelateerd, maar het is wel één van mijn interesses en die zijn het vermelden waard, volgens mij. Ik personaliseer en bouw al 4 jaar fietsen. Het begon met het stuurlint van mijn oude fiets vervangen, maar is sindsdien geëvolueerd tot fietsen bouwen vanaf 0. De eerste fiets die ik bouwde was een lichtblauwe single speed freewheel met zwarte accenten. De fiets werkte naar behoren, maar ik heb een aantal beginnersfouten gemaakt die ik heb kunnen vermijden bij mijn tweede probeersel. Die tweede fiets was donkerblauw met geel en is een fixed gear. Dat betekent dat ik mijn pedalen niet kan stoppen tijdens het fietsen en dat ik kan remmen door achteruit te trappen. Ik heb natuurlijk nog een normale rem voor de veiligheid. De fietsen geven mijn handen iets te doen, aangezien de meeste van mijn interesses rond computers of lezen te maken hebben. De twee fietsen die ik maakte zijn er die ik zelf gebruik, maar als ik ooit de kans krijg om er één te bouwen voor iemand anders, zou ik dat zeker doen.",
  "aottg2":"AOTTG 2",
  "aottg2P":"AOTTG 2, of attack on titan tribute game 2, is een open source vervolg op AOTTG van Feng Lee. Het is een onoficieel spel gebaseerd op de maga/anime shingeki no kyojin of Attack on Titan. Na een korte selectie procedure werd ik een deel van het development team, waartoe ik tot op heden toe behoor. Op dit moment zijn het vooral bug fixes, maar ik hoop dat ik in de toekomst een actievere rol kan spelen.",

  "meP1":"Hallo,",
  "meP2":"ik heet Adam Vromman. Ik ben een bijna volwaardige ‘software developer’.",
  "meP3":"Ik ben geboren in België op 29 augustus 1998 en daar leef ik tot op heden nog steeds. In 2018 ben ik begonnen aan een studie in de toegepaste informatica aan de HOGENT, nadat ik grafisch ontwerp uitprobeerde en ondervond dat het niet was wat ik zocht. Maar twee pogingen bleken genoeg te zijn, aangezien ik met zekerheid kan zeggen dat ik gevonden heb wat ik zoek. Ik vond passie, interesse en een beetje talent in object georiënteerd programmeren; Ik ben enthousiast over web developement en database management; en het belangrijkste, ik zie mezelf een carrière opbouwen in één of meer van deze velden nadat ik afgestudeerd ben. Ik sta te popelen om mijn avontuur in de IT-wereld te starten en ik hoop veel opportuniteiten, connecties, uitdagingen en geslaagde projecten op mijn pad te vinden.",
  "meP4":"Neem gerust contact op.",
  "meP5":"Vriendelijke groeten.",
  "mep6":"Adam",

}

let en =
{
  "lang":"en",
  "future":"Future",
  "projects":"Projects",
  "adam":"Adam",
  "contact":"Contact",
  "thanks":"A big thanks to my good friend, @MerelMatthys, for taking the photo's.",

  "internship":"Internship",
  "job":"Job",
  "internshipP1":"The end of my studies is nearing. But before I can graduate I have one more task to complete. The most impactful, most exciting and biggest task of this part of my life. A three-month long internship, where I work in a company alongside fully fledged developers. As if that was not intense enough, I choose to do this internship abroad. There are not many things I look forward to more or am as excited about as being able to live and work abroad for three months.",
  "internshipP2":"Currently, I am still searching for the right company, but the internship is planned for march 2021 and I am confident that I will be able to find the perfect organisation in the perfect location in time. The countries where I am looking for opportunities are Iceland, Norway and Japan. Iceland is a beautiful country I would love to discover. I have already discovered parts of Norway which gives it a welcoming and familiar feeling. Japan is an entirely different culture and would require the most adaption. But I am sure it would all be worth it.",
  "jobP1":"As I have not graduated yet, I am currently not looking for a job. I am open for summer internships or student jobs I can combine with my studies.",

  "past":"past",
  "present":"present",
  "madonna":"Madonna",
  "madonnaP":"Since 2018 there is a wonderful, new restaurant to be found close to the city centre of Ghent. The restaurant, owned by three incredible ladies, one of which happens to be my mother, is specialized in ‘forgotten vegetables’, local beers and parties of all sizes. They asked me if it was possible to create a website for them. I said I was thrilled to help. Seeing as I am still studying and I have a familial bond with one of the owners, the project is fairly casual, but I still hope to be able to deliver something fulfils my clients’ wishes and that clearly visualizes the warm and cosy feeling Madonna radiates.",
  "merel":"Merel",
  "merelP":"Merel Matthys is a filmmaker and photografer. We decided to help each other out. She would help me take pictures for my website and I would help her with her portfolio. This turned out to be one of my favourite projects. To make a website that looks good but puts the focus on the photos and films on it is not somethings that I learn during my courses. It's a learning process for me and for Merel, but that only makes it more interesting. The website is not finished yet, so it's not public, but the github is.",
  "bikeapp":"BikeApp",
  "bikeappP":"For my Web Applications IV class we had to make an Angular project that uses a RESTful API. As we could freely choose the topic of this website, I chose to make mine about building and fixing bikes. I have made multiple bicycles and it is a topic I like working with, so it was the perfect subject for an interactive and informative website. I managed to use another one of my interests by having non-standard graphical elements which I made myself. This project was really fun and I enjoyed having to figure things out and learn how to use the Angular framework by myself. The website is not public, but the Github repository is.",
  "bikes":"Bikes",
  "bikesP":"Although this is not IT related, it is still a part of my interests and those are worth mentioning, in my opinion. I have customized and build bikes for over 4 years. It started out by just changing the steering wheel wrap on my old bike, but since then it has grown into building my own bikes from scratch. The first one I build was a single speed freewheel in light blue with black accents. The bike works fine, but I made some beginner mistakes that I was able to avoid with my second try. That second bike is dark blue with yellow and is a fixed gear. Which means I can’t keep my pedals still and I can brake by pedalling backwards. Of course, it still has a regular brake for safety. These bikes give my hands something to do, as most of my interests involve computers or reading. The bikes I’ve build are my own, but if I would get the opportunity to build one for someone else, I would be glad to.",
  "aottg2":"AOTTG 2",
  "aottg2P":"AOTTG 2, or attack on titan tribute game 2, is the open source successor to AOTTG by Feng Lee. It's a fan made game, based on the manga/anime shingeki no kyojin or Attack on Titan. After a brief selection process I was added to the development team and have been working on it ever since. For the moment it's mostly bug fixes but I hope to grow into a more involved role in the future.",
  
  "meP1":"Hello,",
  "meP2":"my name is Adam Vromman. I am a close-but-not-yet fully fledged software developer. ",
  "meP3":"I was born in Belgium on the 29th of August 1998, and I still live there to this day. I started studying applied computer science at HOGENT in 2018 after trying out graphical design and finding it not to be what I am looking for. It seems that two tries were enough for me as I have found what I wanted. I have found passion, interest, and some talent in object-oriented programming; I am enthusiastic about web development and database management; and most of all, I see myself pursuing a career in one of these fields the moment I graduate. I am thrilled to start my journey in this industry and I hope to find many opportunities, connections, challenges and achievements on the way.",
  "meP4":"I would love to hear from you.",
  "meP5":"Kind regards.",
  "meP6":"Adam",
  
}



@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public taal: BehaviorSubject<any> = new BehaviorSubject<any>(en);
  public foto: any = document.getElementById(`img`) as HTMLImageElement;
  private _colors = ["ff5757","c2ff57","00ffea","00ffa2","ff00f0"];

  public setImage(url: string)
  {
    if(this.foto != null)
    {
      document.getElementById('foto').style.opacity = '1';
      this.foto.src = url;
      
    }
    else
    {
      console.log("fuck")
    }
     
  }


  public randomColor(): string
  {
    return `#${this._colors[Math.floor(Math.random() * 4)]}`;
  }


  // public addEventListener(id: string)
  // {
  //   try{
  //     let el = document.getElementById(id);
  //     el.addEventListener('mouseenter', () => {let kleur = this.randomColor(); el.style.color = kleur; el.style.borderColor = kleur;});
  //     el.addEventListener('mouseout', () => {el.style.color = '#000000'; el.style.borderColor = '#000000';});
  //   }
  //   catch
  //   {

  //   }
   
  // }

  public changeLang()
  {
    if(this.taal.value["lang"] === 'en')
    {
      this.taal.next(nl);
    }
    else
    {
      this.taal.next(en);
    }
  }
}
