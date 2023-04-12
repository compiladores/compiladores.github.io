---
title: Lenguajes y Compiladores FIUBA 1c23
---
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
        <tr>
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