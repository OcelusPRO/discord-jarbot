const { SlashCommandBuilder } = require("discord.js");
const BlaguesAPI = require("blagues-api");
const config = require("../config.json");
const blagues = new BlaguesAPI(config.blagueToken);

/* En réalité les types de blagues sont : 
    global, dev, dark, limit, beauf, blondes
   mais j'ai retiré ici les blagues limites (+18) et dark (humour noir) étant donnés leur nature.
*/

const typeBlagues = ["global", "dev", "beauf", "blondes"];
const excludedCategories = ["dark", "limit"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blague")
    .setDescription("Réponds par une blague !")
    .addStringOption((option) => {
      return option
        .setName("category")
        .setDescription("Type de blague")
        .setRequired(true)
        .addChoices(
          { name: "Normale", value: "global" },
          { name: "Développeur", value: "dev" },
          { name: "Beauf", value: "beauf" },
          { name: "Blonde", value: "blondes" }
        );
    }),
  async execute(interaction) {
    const selectedType = interaction.options.getString("category");

    try {
      const category = blagues.categories[selectedType.toUpperCase()];
      if (!category) {
        throw new Error(`Catégorie de blague invalide : ${selectedType}`);
      }

      const joke = await fetchBlague(
        config.blagueToken,
        category,
        excludedCategories
      );

      const embed = {
        title: joke.joke,
        description: `||${joke.answer}||`,
        color: 3066993,
        footer: {
          text: interaction.user.username,
          iconUrl: interaction.user.displayAvatarURL(),
        },
      };

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error("Error fetching joke:", error);
      await interaction.reply(
        "Désolé, je n'ai pas pu trouver de blague pour le moment."
      );
    }
  },
};

async function fetchBlague(token, category, excludedCategories) {
  const url = `https://www.blagues-api.fr/api/type/${category}/random?disallow=${excludedCategories.join(
    ","
  )}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, { headers });
  const data = await response.json();

  return data;
}