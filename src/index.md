---
title: Lenguajes y Compiladores FIUBA
semester: 1c23
semester_long: Primer Cuatrimestre 2022
---
# Introducción
Se viene una nueva edición de compiladores. Cátedra Mendez.

A pesar de que los utilizan todos los días, la mayoría de los ingenieros de software tienen muy poco conocimiento sobre cómo están diseñados e implementados los lenguajes de programación. Solo con ver que las portadas de los libros sobre el tema tienen “dragones”, “tigres” y otras bestias mitológicas que sugieren una rama muy compleja de las Ciencias de la Computación se esconde detrás de ellas. Este curso romperá este prejuicio y basándose en un enfoque teórico-práctico emprenderá un camino para comprender y estudiar la belleza detrás de los lenguajes de programación y sus compiladores. El objetivo de la materia es entender, diseñar e implementar un compilador y un intérprete de un lenguaje de programación de alto nivel. Además de adquirir y manejar los conceptos de la Ciencia de la Computación involucrados en la construcción de este tipo de herramientas: teoría del lenguaje, autómatas finitos deterministas y no deterministas, análisis sintáctico ascendente y descendente, análisis semántico, generación de código intermedio y generación de código ejecutable, optimización de código, entre otros.

Se renovaron los trabajos prácticos: utilizaremos deno y typescript. En el cuatrimestre se utilizará el intérprete del lenguaje LUA como caso de estudio. Los alumnos desarrollarán un lenguaje de programación personalizado a lo largo del cuatrimestre, haciendo entregas pequeñas y pautadas. Como TP final, adaptarán el lenguaje a alguna otra máquina virtual existente de aplicación industrial que deseen.

# Notas
{% include "notes.html" %}

# Docentes
- Prof.: Mariano Méndez
    - marianomendez@fi.uba.ar
    - github.com/mendezmariano
- Ayudante encargado de la práctica: José Ignacio Sbruzzi
    - jsbruzzi@fi.uba.ar
    - github.com/jisbruzzi
- Ayudante: Lucas Fiegl
    - github.com/io4

# Bibligrafía 

1. Watson, D. (2017). **A practical approach to compiler construction**. Springer International Publishing.
2. Grune, D., Van Reeuwijk, K., Bal, H. E., Jacobs, C. J., & Langendoen, K. (2012). **Modern compiler design**. Springer Science & Business Media.
3. Mak, R. (2011). **Writing compilers and interpreters: a software engineering approach**. John Wiley & Sons.
4. Watt, D. A., Brown, D. F., & Brown, D. (2000). **Programming language processors in Java: compilers and interpreters**. Pearson Education.
5. Mogensen, T. Æ. (2017). **Introduction to compiler design**. Springer.
6. Friedman, D. P., Wand, M., & Haynes, C. T. (2001). **Essentials of programming languages**. MIT press.
7. Cooper, K., & Torczon, L. (2011). **Engineering a compiler**. Elsevier. (*)
8. Aho, A. V., Sethi, R., & Ullman, J. D. (1986). **Compilers, principles, techniques**. Addison wesley, 7(8), 9. (*)
9. Appel, A. W. (2004). **Modern compiler implementation in C**. Cambridge university press. (*)
10. Louden, K. C. (1997). **Compiler construction**. Cengage Learning.  (*)
11. Bennett, J. P. (1996). **Introduction to compiling techniques: a first course using ANSI C, LEX and YACC**.
12. Thain, D. (2019). **Introduction to Compilers and Language Design**. Lulu. com.

y muchos más

(*) indica los libros clásicos.


# Horarios de clase

- Martes 18 a 21 (teórica presencial)
- Miércoles 18 a 21 (práctica virtual)

Las clases virtuales se realizan en un link de google meet que se envía unos minutos antes de la clase a discord.

# Canales de Comunicación

- [grupo de google](https://groups.google.com/g/lenguajes-y-compiladores)
- Servidor de discord
- [Apunte de la teoría](https://compiladores.github.io/teo)

# Calendario
<iframe width=800 height=500 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQg_Xk6KqXCaGjjuN8_eFZ8S_HweXNvoIhNGCRAcQIESBxV7uKxnNwW4k_EEnji-OLPApirdMX6a1p_/pubhtml?gid=1728272792&amp;single=true&amp;widget=true&amp;headers=false" class="w-full"></iframe>
Fecha de entrega máxima tpx1: 2/5 23:59

# Metodología de la práctica

<table>
    <thead>
        <tr>
            <th>Entregable(s)</th>
            <th>¿obligatorio?</th>
            <th>¿Cuándo se hace?</th>
            <th>Evaluación </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>LAB</td>
            <td>no</td>
            <td>en clase</td>
            <td>Objetiva/automática</td>
        </tr>
        <tr>
            <td>TPO</td>
            <td>si</td>
            <td>fecha de entrega</td>
            <td>Objetiva/automática</td>
        </tr>
        </tr>
            <td>TPX</td>
            <td>no</td>
            <td>fecha de entrega exclusiva</td>
            <td>Objetiva/automática</td>
        </tr>
        <tr>
            <td>TPF</td>
            <td>si, <b>como final</b></td>
            <td>el último mes y durante finales</td>
            <td>checklist, subjetiva</td>
        </tr>
    </tbody>
</table>

- Las entregas de LABs, TPOs, TPXs se hacen por github classroom, script de evaluación automático.
- Nota final: 60% TPF + 40% nota de la práctica.
- Condición de aprobación (nota 4): Entregar todos los TPO antes de la última clase de la práctica

## Tabla de pesos de cada entregable en la nota final
<iframe width=800 height=500 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQg_Xk6KqXCaGjjuN8_eFZ8S_HweXNvoIhNGCRAcQIESBxV7uKxnNwW4k_EEnji-OLPApirdMX6a1p_/pubhtml?gid=173989754&amp;single=true&amp;widget=false&amp;headers=false" class="w-full"></iframe>

# Material 1c23
## práctica 1 - semop
- Tema: semántica operacional
- Fecha: 15/3
- [video de clase](https://vimeo.com/808545954)
- [presentación semop](https://compiladores.github.io/p/semop.html)
- [presentación metodología](https://compiladores.github.io/p/metodologia.html)
- [classroom lab1](https://classroom.github.com/a/wJiJqyOS) fecha límite: lunes 20/3 23:59
- [classroom tpo1](https://classroom.github.com/a/yRgjdgOG) fecha límite: martes 11/4 23:59
- [classroom tpx1](https://classroom.github.com/a/cUYwFpRx) fecha límite: martes 2/5 23:59. **Por dependencia entre temas, recomendamos completarlo antes del 18/4**
## práctica 2 - tipos
- Tema: tipos
- Fecha: 22/3
- [video de la clase](https://vimeo.com/810712163)
- [presentación](https://compiladores.github.io/p/tipos)
- [classroom lab2](https://classroom.github.com/a/R_M-Sn_O)

## Teórica 3 - lexers, introducción a parsers
- Fecha: 28/03/23
- [video de la clase](https://youtu.be/2zfyKaDnbQg)

## práctica 3 - lexers
- Fecha: 29/03/23
- [video de la clase](https://youtu.be/ApDpZiSDIxI)
- [presentación](https://compiladores.github.io/p/lexers)
- [classroom lab3](https://classroom.github.com/a/PDP1_hWb)
- [classroom tpo3](https://classroom.github.com/a/9LGlGcwp)
- [classroom tpx3](https://classroom.github.com/a/_Ju8juVe)

## práctica 4 - parser descendiente recursivo
- Fecha: 12/04/2023
- [video de la clase](https://youtu.be/W5Q9sOQpZ7Y)
- [presentación](https://compiladores.github.io/p/parserdr)
- [classroom tpo4](https://classroom.github.com/a/oJQz729m)

## práctica 5 - intérprete
- Fecha: 19/4/2023
- [video de la clase](https://youtu.be/W7ajUX6KfuU)
- [presentación](https://compiladores.github.io/p/interprete)
- [classroom lab5](https://classroom.github.com/a/L2Ar-0iG)
- [classroom tpo5](https://classroom.github.com/a/CWduB5qv)

## práctica 6 - LL1
- Fecha: 3/5/2023
- [video de la clase](https://youtu.be/neelUlIM9EE)
- [presentación](https://compiladores.github.io/p/ll1)
- [classroom lab6](https://classroom.github.com/a/EF0yae4L)

# Trabajo práctico final: compilador a LLVMIR

- Objetivo: desarrollar un compilador de jsonasm a LLVMIR.
- El esquema JSON correspondiente a jsonlang y baterías de pruebas se incluyen en TPO5 y TPO7. La batería de pruebas debe modificarse para cumplir con las diferencias enumeradas abajo. Esta adaptación es parte del alcance del TPF.
- Los algoritmos necesarios para llevar adelante este TP son parte del módulo 7 (compilador)
- La mayor parte del trabajo necesario se trata de analizar la documentación de LLVMIR https://llvm.org/docs/LangRef.html y el proyecto LLVM en sí mismo.
- Diferencias entre TPF, TPO5 y TPO7:
  - El TPF sólo debe soportar enteros. Las operaciones matemáticas válidas deben ser aquellas que funcionan entre 2 enteros y devuelven un entero.
  - No es obligatorio que el TPF soporte recursividad (tal como TPO7)
- No se debe usar C++ para la implementación del TPF.

## Cronograma recomendado

- 24/5: Tener revisada la documentación de LLVMIR (en especial el tutorial oficial para desarrollar frontends), TPO7 casi terminado.
- 31/5: El TPF puede compilar un programa que imprime algo en la consola
- 7/6: Terminado el test harness, puede correr los tests del TPO5 ó TPO7.
- 14/6: El TPF soporta: asignación de variables, inicialización de variables, expresiones matemáticas.
- 21/6: El TPF soporta control del flujo del programa, funciones
- 28/6: Finalizada la suite de tests

## Dinámica de trabajo

- En cada una de las clases del 24/5 al 21/6, se hace una reunión standup donde cada alumno cuenta brevemente qué hizo la semana pasada y qué va a hacer la semana que viene. Al final de que hable cada alumno, hay tiempo de hacer consultas
- El 28/6 (última clase) haremos una demo donde cada alumno muestra lo que tiene hasta el momento a sus compañeros, comenta qué decisiones de diseño tomó, qué dificultades encontró y cómo las resolvió.
- Cada alumno trabajará en un repositorio privado diferente, perteneciente a la organización "compiladores". Se permite compartir cualquier información con los compañeros, pero no código. Se puede utilizar cualquier lenguaje de programación. El objetivo es crear un entorno colaborativo donde todos aprendamos.
- LLVM es un ecosistema muy documentado y con mucho material disponible en internet. Por ejemplo, [este tutorial oficial](https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html) explica paso a paso cómo crear un lenguaje arriba de LLVM (este TP!). Nos interesa especialmente entender qué enfoque le da cada alumno y cómo resultan las dicisiones que cada uno haga.

## Criterios de evaluación

**La condición _excluyente_ para aprobar la cursada de la materia es tener un "camino crítico": al menos 1 test de integración que verifique la salida de un programa que imprime algo a stdout.**

- **(4 puntos) Alcance mínimo alcanzado.** Se construyó un compilador que soporta jsonlang casi completo\*, existen tests de integración.
- **(2 puntos) Cumplir tiempos.**
  - La asistencia a cada una de las 6 reuniones del 24/5 al 28/6 inclusive suma 0.25 puntos, independientemente de si el alumno tiene algo que decir en la standup.
  - 0.5 puntos asignados de forma subjetiva según cuán cerca del 28/6 se complete el TPF, tiene en cuenta que se haya completado el TPXF, etc.
- **(2 puntos) Calidad de la implementación.** Algunos criterios favorables:
  - Patrón visitor
  - Inversión de dependencias
  - Clean code
  - Arquitectura definida
- **(2 puntos) Calidad de la suite de tests automáticos** Algunos criterios favorables:
  - Cubrir todos\* los features de jsonlang implementados con tests de integración
  - Medir cobertura
  - Tests unitarios

\*esto śe refiere a la versión "reducida" del jsonlang, que sólo maneja enteros.

## TPXF: Parser de un lenguaje personalizado

Este TPX consiste en desarrollar un parser que emita jsonlang. El lenguaje desarrollado es totalmente personalizado. Se recomienda que el parser desarrollado funcione sobre una fracción de algún lenguaje de programación conocido con buen soporte de IDEs. Se debe usar una de las siguientes herramientas:

- [tree-sitter](https://tree-sitter.github.io/tree-sitter/) (suma como máximo 2 puntos)
- [nearley.js sobre deno](https://nearley.js.org/) (Suma como máximo 1.5 puntos)
- [menhir integrado con dune, esy](http://gallium.inria.fr/~fpottier/menhir/) (Suma como máximo 1.5 puntos)

Este TPXF se entrega durante el cuatrimestre, no en época de finales, **suma a la componente de nota del TPF**, ya que la evaluación es subjetiva. **Es obligatoria la presencia de tests.** Componentes de la evaluación subjetiva:

- Calidad de la implementación (30%)
- Cobertura de la suite de tests (70%)

## Links **muy** relevantes

- LLVM language Reference: https://llvm.org/docs/LangRef.html
- **LLVM Frontend creation example using SDK: https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html**
- Understanding LLVM IR: https://mukulrathi.com/create-your-own-programming-language/llvm-ir-cpp-api-tutorial/
- Mapping High Level Constructs to LLVM IR: https://buildmedia.readthedocs.org/media/pdf/mapping-high-level-constructs-to-llvm-ir/latest/mapping-high-level-constructs-to-llvm-ir.pdf
