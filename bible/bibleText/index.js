import genesis from './genesis'
import exodo from './exodo'
import levitico from './levitico'
import numeros from './numeros'
import deuteronomio from './deuteronomio'
import josue from './josue'
import juizes from './juizes'
import rute from './rute'
import samuel1 from './1samuel'
import samuel2 from './2samuel'
import reis1 from './1reis'
import reis2 from './2reis'
import cronicas1 from './1cronicas'
import cronicas2 from './2cronicas'
import esdras from './esdras'
import neemias from './neemias'
import ester from './ester'
import jo from './jo'
//ADD SALMOS (19)
import proverbios from './proverbios'
import eclesiastes from './eclesiastes'
import canticos from './canticos'
import isaias from './isaias'
import jeremias from './jeremias'
import lamentacoes from './lamentacoes'
import ezequiel from './ezequiel'
import daniel from './daniel'
import oseias from './oseias'
import joel from './joel'
import amos from './amos'
import obadias from './obadias'
import jonas from './jonas'
import miqueias from './miqueias'
import naum from './naum'
import habacuque from './habacuque'
import sofonias from './sofonias'
import ageu from './ageu'
import zacarias from './zacarias'
import malaquias from './malaquias'
import mateus from './mateus'
import marcos from './marcos'
import lucas from './lucas'
import joao from './joao'
import atos from './atos'
import romanos from './romanos'
import corintios1 from './1corintios'
import corintios2 from './2corintios'
import galatas from './galatas'
import efesios from './efesios'
import filipenses from './filipenses'
import colossenses from './colossenses'
import tessalonicenses1 from './1tessalonicenses'
import tessalonicenses2 from './2tessalonicenses'
import timoteo1 from './1timoteo'
import timoteo2 from './2timoteo'
import tito from './tito'
import filemom from './filemom'
import hebreus from './hebreus'
import tiago from './tiago'
import pedro1 from './1pedro'
import pedro2 from './2pedro'
import joao1 from './1joao'
import joao2 from './2joao'
import joao3 from './3joao'
import judas from './judas'
import apocalipse from './apocalipse'

const books = []

books.push(genesis)
books.push(exodo)
books.push(levitico)
books.push(numeros)
books.push(deuteronomio)
books.push(josue)
books.push(juizes)
books.push(rute)
books.push(samuel1)
books.push(samuel2)
books.push(reis1)
books.push(reis2)
books.push(cronicas1)
books.push(cronicas2)
books.push(esdras)
books.push(neemias)
books.push(ester)
books.push(jo)
books.push(proverbios)
books.push(eclesiastes)
books.push(canticos)
books.push(isaias)
books.push(jeremias)
books.push(lamentacoes)
books.push(ezequiel)
books.push(daniel)
books.push(oseias)
books.push(joel)
books.push(amos)
books.push(obadias)
books.push(jonas)
books.push(miqueias)
books.push(naum)
books.push(habacuque)
books.push(sofonias)
books.push(ageu)
books.push(zacarias)
books.push(malaquias)
books.push(mateus)
books.push(marcos)
books.push(lucas)
books.push(joao)
books.push(atos)
books.push(romanos)
books.push(corintios1)
books.push(corintios2)
books.push(galatas)
books.push(efesios)
books.push(filipenses)
books.push(colossenses)
books.push(tessalonicenses1)
books.push(tessalonicenses2)
books.push(timoteo1)
books.push(timoteo2)
books.push(tito)
books.push(filemom)
books.push(hebreus)
books.push(tiago)
books.push(pedro1)
books.push(pedro2)
books.push(joao1)
books.push(joao2)
books.push(joao3)
books.push(judas)
books.push(apocalipse)

const bible = {
  books : books
}

export const findText = async (text) => {
  let allFoundVerses = []
  await bible.books.forEach((book, indexBook)=>{
    book.chapters.forEach((chapter, indexChapter)=>{
      chapter.verses.forEach((verse)=>{
        if (verse.content.search(text) != -1){
          let foundVerse = {
            indexBook,
            indexChapter,
            bookName: book.name,
            chapterNumber: chapter.number,
            verse: verse
          }
          allFoundVerses.push(foundVerse)
        }
      })
    })
  })
  return allFoundVerses
}

export default bible;
