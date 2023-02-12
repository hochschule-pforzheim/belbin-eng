(function() {
    var curArea = -1;
    var areas = [
        {desc: "Welchen Beitrag glaube ich in einem Team leisten zu können:", statements: [
            "Ich glaube, ich kann schnell neue Möglichkeiten erkennen und nutzen. ",
            "Ich kann gut mit ganz unterschiedlichen Leuten zusammenarbeiten. ",
            "Es liegt in meiner Natur, Ideen hervorzubringen. ",
            "Es ist meine Stärke, jemanden aus der Reserve zu locken, wenn ich merke, dass er etwas Wertvolles für die Ziele der Gruppe beisteuern kann.",
            "Man kann sich darauf verlassen das ich Dinge zuende bringe.",
            "Meine technische Expertise ist meine große Stärke. ",
            "Ich bin fähig, mich zeitweise unbeliebt zu machen, wenn das Endergebnis es wert ist. ",
            "Ich habe normalerweise ein Gespür dafür, was realistisch ist und was klappen könnte. ",
            "Ich kann vernünftige Alternativen vorschlagen, ohne Partei zu ergreifen oder eigene Vorurteile ins Spiel zu bringen. "
        ]},
        {desc: "Wenn mir Teamarbeit möglicherweise nicht so liegt, kann das folgende Gründe haben:", statements: [
            "Ich fühle mich nicht wohl, wenn Meetings nicht gut strukturiert, gesteuert und geleitet sind. ",
            "Ich neige dazu, anderen gegenüber zu großzügig zu sein, wenn sie eine sinnvolle Ansicht vertreten, die noch nicht genügend beachtet wurde.",
            "Ich bringe mich nur zögerlich ein wenn ich mich nicht als Experte sehe. ",
            "Ich tendiere dazu, zuviel zu reden, wenn die Gruppe dabei ist, neue Ideen zu entwickeln.",
            "Meine objektive Sichtweise macht es mir schwer, mich bereitwillig und mit Begeisterung den KollegInnen anzuschließen.",
            "Ich erwecke manchmal den Eindruck, dominierend und autoritär zu sein, wenn etwas unbedingt erledigt werden muss. ",
            "Es fällt mir vielleicht deshalb schwer die Leitung zu übernehmen, weil ich zu sehr von der Gruppenatmosphäre abhängig bin.",
            "Ich verrenne mich häufig in eigene Ideen und verliere so den Anschluss an die Ereignisse. ",
            "Ich zögere Vorschläge zu unterbreiten wenn diese noch nicht hinreichend detailiert sind. "
        ]},
        {desc: "Wie verhalte ich mich, wenn ich mit anderen Leuten an einem Projekt beteiligt bin?", statements: [
            "Ich besitze die Gabe, jemanden zu beeinflussen, ohne ihn unter Druck zu setzen. ",
            "Meine ständige Wachsamkeit verhindert Leichtsinnsfehler und Versäumnisse. ",
            "Ich bin bereit, die Dinge voranzutreiben, damit in einem Meeting keine Zeit vertrödelt und das eigentliche Ziel nicht aus dem Auge verloren wird. ",
            "Man kann sich darauf verlassen, dass ich originelle Ideen habe. ",
            "Ich bin immer bereit, gute Vorschläge zu unterstützen, wenn sie im allgemeinen Interesse sind. ",
            "Ich bin immer begierig, die allerneuesten Ideen und Entwicklungen zu entdecken. ",
            "Ich versuche mich in jeder Situation professionell zu verhalten. ",
            "Ich glaube, dass mein Urteilsvermögen dazu beitragen kann, die richtigen Entscheidungen zu fällen. ",
            "Man kann sich darauf verlassen, dass ich alle wichtigen Arbeiten systematisch in die Wege leite."
        ]},
        {desc: "Meine typische Einstellung zur Gruppenarbeit ist folgende:", statements: [
            "Ich bin sehr daran interessiert, meine KollegInnen gut kennen zu lernen. ",
            "Ich beteilige dort wo ich mich als Experte sehe. ",
            "Ich zögere nicht, andere Meinungen anzuzweifeln oder eine eigene Meinung zu vertreten, auch wenn ich damit in der Minderheit bin. ",
            "Normalerweise finde ich triftige Argumente, um nicht stichhaltige Vorschläge zu entkräften. ",
            "Ich glaube, es liegt mir, beschlossene Pläne erfolgreich in die Tat umzusetzen. ",
            "Ich neige dazu, über das ohnehin Offensichtliche hinwegzugehen und stattdessen das Unerwartete auf den Tisch zu bringen. ",
            "Bei allem, was ich tue, neige ich zu Perfektionismus. ",
            "Ich bin bereit, Kontakte außerhalb der Gruppe zu nutzen. ",
            "Zwar bin ich an allen Ansichten interessiert, zögere aber nicht, mir eine eigene Meinung zu bilden, sobald eine Entscheidung gefällt werden muss."
        ]},
        {desc: "Folgendes schafft mir Befriedigung bei der Arbeit:", statements: [
            "Es macht mir Spaß, Situationen zu analysieren und alle Möglichkeiten abzuwägen. ",
            "Ich bin daran interessiert, praktische Problemlösungen zu finden. ",
            "Ich genieße das Gefühl, gute Arbeitsbeziehungen zu fördern. ",
            "Ich kann Entscheidungen stark beeinflussen. ",
            "Ich kann Leute treffen, die vielleicht etwas Neues einzubringen haben. ",
            "Ich kann Leute dahin bringen, dass sie sich über die notwendigen Maßnahmen einigen. ",
            "Ich fühle mich in meinem Element, wenn ich mich ganz auf eine Aufgabe konzentrieren kann. ",
            "Ich suche mir gern Gebiete, bei denen meine Phantasie gefordert ist.",
            "Ich kann meine besondere Qualifikation zu meinem Vorteil nutzen. "
        ]},
        {desc: "Was geschieht, wenn ich plötzlich mit einer schwierigen Aufgabe, knappem Zeitrahmen und Leuten, die ich nicht kenne, konfrontiert werde?", statements: [
            "Ich würde mich bestmöglich in die Aufgabe einarbeiten. ",
            "Ich würde selbstständig eine Lösung erarbeiten und sie dann der Gruppe vorstellen. ",
            "Ich bin bereit, mit der Person zusammenzuarbeiten, die den positivsten Ansatz aufzeigt.",
            "Ich würde Mittel und Wege finden, die Aufgabe zu vereinfachen, indem ich herausfinde, was die verschiedenen Leute am besten dazu beitragen können. ",
            "Mein natürliches Gespür für Dringlichkeit würde sicherstellen, dass wir den Zeitplan einhalten. ",
            "Ich glaube, ich würde mich nicht aufregen und einen klaren Kopf bewahren. ",
            "Ich würde trotz des Drucks beharrlich und zielstrebig weiterarbeiten. ",
            "Ich wäre bereit, die Leitung zu übernehmen, wenn ich den Eindruck hätte, dass die Gruppe keinen Fortschritt macht. ",
            "Ich würde Diskussionen anregen mit der Absicht, neue Gedanken zu stimulieren und etwas in Bewegung zu bringen."
        ]},
        {desc: "Welche Probleme habe ich, wenn ich in einer Gruppe arbeite?", statements: [
            "Ich neige dazu, denen gegenüber ungeduldig zu werden, die den Fortschritt behindern. ",
            "Man wirft mir manchmal vor, ich sei zu analytisch. ",
            "Mein Wunsch, sicherzustellen, dass die Arbeit richtig ausgeführt wird, hält manchmal den Fortschritt auf. ",
            "Ich bin ziemlich schnell gelangweilt wenn mich anderer antreibt. ",
            "Es fällt mir schwer anzufangen, solange die Ziele nicht klar sind. ",
            "Mir fehlen manchmal die richtigen Worte, komplizierte Sachverhalte, die ich im Kopf habe, zu erläutern und zu klären. ",
            "Es ist mir bewusst, dass ich von anderen Dinge verlange, die ich selbst nicht tun kann. ",
            "Ich denke das ich Zeit verschwende und die Sache lieber alleine lösen würde. ",
            "Ich zögere meine Ansichten vor schwierigen oder mächtigen Personen vorzutragen."
        ]}
    ];

    // assignment of numbers to letters:
    // 0 1 2 3 4 5 6 7
    // a b c d e f g h
    
    var analysisMap = [ 'CO', 'SH', 'PL', 'ME', 'IMP', 'TW', 'RI', 'CF', 'SP' ].reduce((analysisMap, name, idx) => {

        analysisMap[name] = [
            [ 3, 6, 2, 8, 7, 1, 0, 4, 5 ],
            [ 1, 5, 7, 4, 0, 6, 3, 8, 2 ],
            [ 0, 2, 3, 7, 8, 4, 5, 1, 6 ],
            [ 8, 2, 5, 3, 4, 0, 7, 6, 1 ],
            [ 5, 3, 7, 0, 1, 2, 4, 6, 8 ],
            [ 3, 7, 1, 5, 6, 2, 8, 4, 0 ],
            [ 6, 0, 5, 1, 4, 8, 3, 2, 7 ]
        ].map(row => row[idx]);

        return analysisMap;
    }, {});

    var abbrMap = {
        CO: "Co-ordinator",
        SH: "Shaper",
        PL: "Plant",
        ME: "Monitor Evaluator",
        IMP: "Implementer",
        TW: "Team Worker",
        RI: "Resource Investigator",
        CF: "Completer/Finisher",
        SP: "Specialist"
    };
                
    function checkFieldsAndAdvance(event) {
        var sum = 0;
        var current = areas[curArea];
        var result = [];
        
        event.preventDefault();

        for (var i = 0; i < current.statements.length; i++) {
            var e = $("#cbody .choice-" + i);
            var val = $(e).val();
            if (val != "") {
                val = parseInt(val);
                sum += val;
            } else {
                val = 0;
            }

            result.push(val);
        }

        if (sum != 10) {
            showHint(`Summe der Punkte ist ${ sum } und nicht 10.`, 'danger');
        } else {
            current.result = result;
            advance();
        }
    }

    function showHint(text, className='primary') {
        $('.count-hint')
            .text(text)
            .removeClass('alert-primary alert-danger alert-warning alert-success hidden')
            .addClass(`alert-${ className }`);
    }

    function checkAssignedPoints(event) {
        var current = areas[curArea];
        var sum = 0;

        for (var i = 0; i < current.statements.length; i++) {
            var e = $(`#cbody .choice-${ i }`);
            var val = $(e).val();

            sum += parseInt(val, 10) || 0;
        }

        if (sum === 10) {
            showHint('Alle Punkte vergeben.', 'success');
        } else
        if (sum < 10) {
            showHint(`Noch ${ 10 - sum } freie${ 10 - sum === 1 ? 'r' : '' } Punkt${ 10 - sum === 1 ? '' : 'e' }.`, 'warning');
        } else {
            showHint(`${ sum - 10 } Punkt${ sum - 10 !== 1 ? 'e' : '' } zu viel vergeben.`, 'danger');
        }
    }
    
    function saveResults(results) {
        var url = new URL(window.location.href);

        var resultsQuery = btoa(JSON.stringify(results));

        url.searchParams.set('results', resultsQuery);
        url.hash = '';

        window.location.href = url.toString();
    }

    function parseResults() {
        var url = new URL(window.location.href);

        var resultsQuery = url.searchParams.get('results');

        if (!resultsQuery) {
            return null;
        }

        try {
            return JSON.parse(atob(resultsQuery));
        } catch (err) {
            return null;
        }
    }

    function computeResults() {
        var results = [];

        for (var key in abbrMap) {
            var sum = 0;
            var mappings = analysisMap[key];
            for (var i = 0; i < mappings.length; i++) {
                sum += areas[i].result[mappings[i]];
            }

            var entry = {name: key, points: sum};
            results.push(entry);
        }

        return results;
    }

    function setState(mode) {
        $("body").removeClass('state-questions state-intro state-summary');

        $("body").addClass(`state-${ mode }`);
    }

    function advance() {

        if (curArea + 1 >= areas.length) {
            const results = computeResults();

            saveResults(results);
            showSummary(results);
        } else {
            showArea(curArea + 1);
        }
    }

    function showSummary(results) {

        setState('summary');

        var resultsMap = results.reduce(function(map, result) {
            map[result.name] = result.points;
            return map;
        }, {});

        $("#content h2").text("Zusammenfassung");
        $("#cbody").html("<p>Folgendes Profil ergibt sich auf Basis der Antworten:</p><ul class='summary'></ul>");

        var ul = $("#cbody .summary");
        var MAX_POINTS = 70;
        var MAX_WIDTH = 500;
        
        for (var key1 in abbrMap) {
            var width = Math.round((resultsMap[key1] / MAX_POINTS) * MAX_WIDTH);
            ul.append("<li><div class='bar role-" + key1 + "' style='width: " + width + "px'>" + (resultsMap[key1] || '') + "</div><a class='label' href='#role-" + key1 + "'><abbr title='" + abbrMap[key1] + "'>" + key1 + "</abbr></a></li>");
        }

        var sortedResults = results.sort(function(a, b) {
            return (a.points > b.points ? -1 : (a.points == b.points ? 0 : 1));
        });

        var selectors = {first: ".role-" + sortedResults[0].name};
        
        var c = 1;
        for (i = c; i < sortedResults.length; i++) {
            if (sortedResults[i].points == sortedResults[i - 1].points) {
                selectors.first += ", .role-" + sortedResults[i].name;
                c = i + 1;
            } else {
                break;
            }
        }

        // c was originally starting position of second choice
        selectors.second = ".role-" + sortedResults[c++].name;

        for (i = c; i < sortedResults.length; i++) {
            if (sortedResults[i].points == sortedResults[i - 1].points) {
                selectors.second += ", .role-" + sortedResults[i].name;
            } else {
                break;
            }
        }
        
        $(selectors.first).addClass("first-choice");
        $(selectors.second).addClass("second-choice");
    }

    function showArea(i) {

        setState('questions');

        curArea = i;
        var current = areas[i];
        
        $("#content h2").text(`Frage ${ (i + 1) } von ${ areas.length }`);

        $("#cbody").html(`
            <form>
                <p>${ current.desc }</p>
                <ol class="choices"></ol>
            </form>
        `);

        var choices = $("#cbody .choices");
        
        $.each(current.statements, function(i, e) {
            choices.append(`
                <li class="choice">
                    <label>
                        <div class="answer">${ e }</div>

                        <input class="form-control choice-${ i }" type="text" maxlength="2"/>

                        <div class="input-group">
                            <a class="btn btn-outline btn-inc-dec" data-inc="-1">-</a>
                            <a class="btn btn-outline btn-inc-dec" data-inc="1">+</a>
                        </div>

                    </label>
                </li>
            `);
        });
        
        $("#cbody form").append(`
            <div class="alert alert-primary count-hint hidden sticky"></div>

            <p class="footer">

                <button class="btn btn-primary btn-lg btn-next" type="submit">
                    ${ (curArea >= areas.length - 1 ? "Auswertung" : "Nächste Frage") }
                </button>
            </p>
        `);

        $('#cbody [data-inc]').on('click', function(event) {

            event.stopPropagation();

            const inc = parseInt($(this).data('inc'), 10);

            const input = $(this).parents('.choice').find('input');
            const value = parseInt(input.val(), 10) || 0;

            input.val(Math.max(value + inc, 0));

            checkAssignedPoints(event);
        });

        $('main').get(0).scrollIntoView({
            block: 'start'
        });

        $('#cbody .choice-0').focus();

        $("#cbody input").on('input change', checkAssignedPoints);

        $('#cbody form').on('submit', checkFieldsAndAdvance);
    }
    
    $(function() {

        var results = parseResults();

        if (results) {
            showSummary(results);
        } else {
            $("#start").click(advance);
        }
    });
})();