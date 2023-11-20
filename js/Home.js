// Function to change language
function changeLanguage(header, section, about, language, languageClass) {
    $(".nav-menu").children().eq(0).text(header[0]);
    $(".nav-menu").children().eq(1).text(header[1]);
    $(".nav-menu").children().eq(2).text(header[2]);
    $(".nav-menu").children().eq(3).text(header[3]);
    $(".language-selected").text(language);
    $(".language-selected").removeClass("change-en change-es change-br");
    $(".language-selected").addClass(languageClass);

    // Adiciona quebras de linha específicas para cada idioma no título
    let titleText = section;
    if (language === "pt-BR") {
        titleText = "Aventuras Arqueológicas,<br><br>Em Buscas das Relíquias Perdidas";
    } else if (language === "en-US") {
        titleText = "Archaeological Adventures<br><br>In Search of Lost Relics";
    } else if (language === "es") {
        titleText = "Aventuras Arqueológicas<br><br>En Busca de Reliquias Perdidas";
    }

    $("#title").html(titleText);

    // Adiciona textos específicos para cada idioma na seção "Sobre"
    $(".about-container ul:nth-child(1) li:nth-child(1) a").text(about[0]);
    $(".about-container ul:nth-child(1) li:nth-child(2) a").text(about[1]);
    $(".about-container ul:nth-child(1) li:nth-child(3) a").text(about[2]);
    $(".about-container ul:nth-child(2) li:nth-child(1) a").text(about[3]);
    $(".about-container ul:nth-child(2) li:nth-child(2) a").text(about[4]);
    $(".about-container ul:nth-child(2) li:nth-child(3) a").text(about[5]);
}

// Portuguese
$(function () {
    $(".br").click(function () {
        changeLanguage(
            ["Home", "Personagens", "Inimigos", "Contato"],
            "Aventuras Arqueológicas, Em Buscas das Relíquias Perdidas",
            ["Termos de serviço", "Política de privacidade", "Segurança e proteção"],
            "pt-BR",
            "change-br"
        );
    });
});

// English
$(function () {
    $(".en").click(function () {
        changeLanguage(
            ["Home", "Characters", "Enemies", "Contact"],
            "Archaeological Adventures in Search of Lost Relics",
            ["Terms of service", "Privacy policy", "Security and protection"],
            "en-US",
            "change-en"
        );
    });
});

// Spanish
$(function () {
    $(".es").click(function () {
        changeLanguage(
            ["Inicio", "Personajes", "Enemigos", "Contacto"],
            "Aventuras Arqueológicas En Busca de Reliquias Perdidas",
            ["Términos de servicio", "Política de privacidade", "Seguridad y protección"],
            "es",
            "change-es"
        );
    });

});

