(function () {
    var curArea = -1;
    var areas = [
        {
            desc: "What contribution do I think I can make to a team?", statements: [
                "I believe I can quickly spot and take advantage of new opportunities.",
                "I work well with a wide variety of people.",
                "It is in my nature to generate ideas.",
                "It is my strength to draw someone out when I realize that they can contribute something valuable to the group's goals.",
                "You can rely on me to get things done.",
                "My technical expertise is my greatest strength.",
                "I am capable of being unpopular at times if the end result is worth it.",
                "I usually have a sense of what is realistic and what might work.",
                "I can suggest reasonable alternatives without taking sides or bringing my own prejudices into play."
            ]
        },
        {
            desc: "If I am not comfortable with teamwork, it may be for one of the following reasons:", statements: [
                "I am not comfortable when meetings are not well structured, managed and led.",
                "I tend to be too generous to others when they have a sensible view that has not been sufficiently considered.",
                "I am reluctant to contribute if I don't see myself as an expert.",
                "I tend to talk too much when the group is in the process of developing new ideas.",
                "My objective point of view makes it difficult for me to join my colleagues willingly and enthusiastically.",
                "I sometimes give the impression of being domineering and authoritarian when something absolutely has to be done.",
                "I may find it difficult to take the lead because I am too dependent on the group atmosphere.",
                "I often get lost in my own ideas and lose touch with what's going on.",
                "I hesitate to make suggestions if they are not yet sufficiently detailed."
            ]
        },
        {
            desc: "How do I behave when I am involved in a project with other people?", statements: [
                "I have the ability to influence someone without putting them under pressure.",
                "My constant vigilance prevents careless mistakes and omissions.",
                "I am prepared to push things forward so that no time is wasted in a meeting and the actual goal is not lost sight of.",
                "I can be relied upon to come up with original ideas.",
                "I am always ready to support good proposals if they are in the general interest.",
                "I am always eager to discover the very latest ideas and developments.",
                "I try to behave professionally in every situation.",
                "I believe that my judgment can help to make the right decisions.",
                "You can rely on me to systematically initiate all important work."
            ]
        },
        {
            desc: "My typical attitude to group work is as follows:", statements: [
                "I am very interested in getting to know my colleagues well.",
                "I participate where I see myself as an expert.",
                "I do not hesitate to question other opinions or to express my own opinion, even if I am in the minority.",
                "I usually find valid arguments to invalidate unsound proposals.",
                "I think it suits me to successfully put decided plans into practice.",
                "I tend to go beyond the obvious and bring the unexpected to the table instead.",
                "I tend to be a perfectionist in everything I do.",
                "I am willing to use contacts outside the group.",
                "Although I am interested in all views, I do not hesitate to form my own opinion as soon as a decision has to be made."
            ]
        },
        {
            desc: "The following gives me satisfaction at work:", statements: [
                "I enjoy analyzing situations and weighing up all the options.",
                "I am interested in finding practical solutions to problems.",
                "I enjoy the feeling of fostering good working relationships.",
                "I can strongly influence decisions.",
                "I can meet people who may have something new to bring to the table.",
                "I can get people to agree on what needs to be done.",
                "I feel in my element when I can concentrate fully on a task.",
                "I like to look for areas where my imagination is challenged.",
                "I can use my special qualifications to my advantage."
            ]
        },
        {
            desc: "What happens if I am suddenly confronted with a difficult task, a tight time frame and people I don't know?", statements: [
                "I would familiarize myself with the task to the best of my ability.",
                "I would work out a solution on my own and then present it to the group.",
                "I am willing to work with the person who shows the most positive approach.",
                "I would find ways to simplify the task by finding out what different people can best contribute.",
                "My natural sense of urgency would ensure that we stay on schedule.",
                "I don't think I would get upset and keep a clear head.",
                "I would persevere and continue to work with determination despite the pressure.",
                "I would be prepared to take the lead if I felt the group was not making progress.",
                "I would initiate discussions with the intention of stimulating new ideas and getting things moving."
            ]
        },
        {
            desc: "What problems do I have when I work in a group?", statements: [
                "I tend to get impatient with those who hinder progress.",
                "I am sometimes accused of being too analytical.",
                "My desire to make sure the work is done right sometimes stops progress.",
                "I get bored quite quickly when I am driven by others.",
                "I find it difficult to get started unless the goals are clear.",
                "I sometimes don't have the right words to explain and clarify complicated issues that I have in my head.",
                "I'm aware that I'm asking others to do things that I can't do myself.",
                "I think I'm wasting time and would rather solve things on my own.",
                "I hesitate to present my views in front of difficult or powerful people."
            ]
        }
    ];

    // assignment of numbers to letters:
    // 0 1 2 3 4 5 6 7
    // a b c d e f g h

    var analysisMap = ['CO', 'SH', 'PL', 'ME', 'IMP', 'TW', 'RI', 'CF', 'SP'].reduce((analysisMap, name, idx) => {

        analysisMap[name] = [
            [3, 6, 2, 8, 7, 1, 0, 4, 5],
            [1, 5, 7, 4, 0, 6, 3, 8, 2],
            [0, 2, 3, 7, 8, 4, 5, 1, 6],
            [8, 2, 5, 3, 4, 0, 7, 6, 1],
            [5, 3, 7, 0, 1, 2, 4, 6, 8],
            [3, 7, 1, 5, 6, 2, 8, 4, 0],
            [6, 0, 5, 1, 4, 8, 3, 2, 7]
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
            var val = parseInt(e.val(), 10) || 0;

            sum += val;

            result.push(val);
        }

        if (sum != 10) {
            showHint($(`<strong>Summe der Punkte ist ${sum} und nicht 10.</strong>`), 'danger');
        } else {
            current.result = result;
            advance();
        }
    }

    function showHint(text, className = 'primary') {
        $('.count-hint')
            .html(text)
            .removeClass('alert-primary alert-danger alert-warning alert-success hidden')
            .addClass(`alert-${className}`);
    }

    function checkAssignedPoints() {
        var current = areas[curArea];
        var sum = 0;

        for (var i = 0; i < current.statements.length; i++) {
            var e = $(`#cbody .choice-${i}`);
            var val = $(e).val();

            sum += parseInt(val, 10) || 0;
        }

        if (sum === 10) {
            const nextLabel = curArea === areas.length - 1 ? 'Evaluation' : 'Next question';

            const el = $(`<span>All points distributed. <a href class="next-link alert-link">${nextLabel}</a>.</span>`);

            el.find('.next-link').on('click', checkFieldsAndAdvance);

            showHint(el, 'success');
        } else
            if (sum === 0) {
                showHint($(`<span>Distribute <strong>${10 - sum}</strong> points for correct statements.</span>`), 'warning');
            } else
                if (sum < 10) {
                    showHint($(`<span>Still <strong>${10 - sum}</strong> free point${10 - sum === 1 ? '' : 's'}.</span>`), 'warning');
                } else {
                    showHint($(`<span><strong>${sum - 10} Point${sum - 10 !== 1 ? 's' : ''}</strong> distributed too much.</span>`), 'danger');
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

            var entry = { name: key, points: sum };
            results.push(entry);
        }

        return results;
    }

    function setState(mode) {
        $("body").removeClass('state-questions state-intro state-summary');

        $("body").addClass(`state-${mode}`);
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

        var resultsMap = results.reduce(function (map, result) {
            map[result.name] = result.points;
            return map;
        }, {});

        $('#content h2').text('Summary');
        $('#cbody').html(`
            <p>
                The following profile emerges on the basis of the responses:
            </p>
            <ul class="summary"></ul>
        `);

        var ul = $("#cbody .summary");
        var MAX_POINTS = 70;
        var MAX_WIDTH = 500;

        for (var key1 in abbrMap) {
            var width = Math.round((resultsMap[key1] / MAX_POINTS) * MAX_WIDTH);
            ul.append(`
                <li>
                    <span class="bar role-${key1}" style="width: ${width}px">
                        ${resultsMap[key1] > 3 ? resultsMap[key1] : ' '}
                    </span>
                    ${resultsMap[key1] <= 3 ? resultsMap[key1] : ''}
                    <a class="label" href="#role-${key1}">
                        <abbr title="${abbrMap[key1]}">${key1}</abbr>
                    </a>
                </li>
            `);
        }

        var sortedResults = results.sort(function (a, b) {
            return (a.points > b.points ? -1 : (a.points == b.points ? 0 : 1));
        });

        var selectors = { first: ".role-" + sortedResults[0].name };

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

        $("#content h2").text(`Frage ${(i + 1)} von ${areas.length}`);

        $("#cbody").html(`
            <div class="alert alert-primary count-hint hidden sticky"></div>
            <form>
                <p>${current.desc}</p>
                <ol class="choices"></ol>
            </form>
        `);

        var choices = $("#cbody .choices");

        $.each(current.statements, function (i, e) {
            choices.append(`
                <li class="choice">
                    <label>
                        <div class="answer">${e}</div>

                        <input inputmode="decimal" class="form-control choice-${i}" type="text" maxlength="2"/>

                        <div class="input-group">
                            <a class="btn btn-outline btn-inc-dec" data-inc="-1">-</a>
                            <a class="btn btn-outline btn-inc-dec" data-inc="1">+</a>
                        </div>

                    </label>
                </li>
            `);
        });

        $("#cbody form").append(`
            <p class="footer">

                <button class="btn btn-primary btn-lg btn-next" type="submit">
                    ${(curArea >= areas.length - 1 ? "Evaluation" : "Next question")}
                </button>
            </p>
        `);

        $('#cbody [data-inc]').on('click', function (event) {

            event.stopPropagation();

            const inc = parseInt($(this).data('inc'), 10);

            const input = $(this).parents('.choice').find('input');
            const value = parseInt(input.val(), 10) || 0;

            input.val(Math.max(value + inc, 0));

            checkAssignedPoints();
        });

        $('main').get(0).scrollIntoView({
            block: 'start'
        });

        $('#cbody .choice-0').focus();

        checkAssignedPoints();

        $("#cbody input").on('input', checkAssignedPoints);

        $('#cbody form').on('submit', checkFieldsAndAdvance);
    }

    $(function () {

        var results = parseResults();

        if (results) {
            showSummary(results);
        } else {
            $("#start").on('click', advance);
        }
    });
})();