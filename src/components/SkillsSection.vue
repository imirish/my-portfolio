<template>
  <section class="py-[2rem] bg-[#F2B5D4] text-center">
    <h2 class="text-2xl font-bold mb-8 text-[#1E1E2E]">
      <span v-if="!isBoardVisible">Skills and Tools</span>
      <span v-else>
        <span v-if="winner">Winner: {{ winner }}</span>
        <span v-else-if="isDraw">It's a Draw!</span>
        <span v-else>Current Player: {{ currentPlayer }}</span>
      </span>
    </h2>
    <div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto text-[#1E1E2E]">
      <div
        v-if="!isBoardVisible"
        v-for="skill in skills"
        :key="skill"
        class="bg-white p-4 rounded shadow text-base sm:text-xl"
      >
        {{ skill }}
      </div>

      <button
        v-else
        v-for="(cell, idx) in board"
        :key="idx"
        @click="handleClick(idx)"
        class="bg-white p-4 h-14 rounded shadow hover:scale-105 transform transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
        :class="[
          'bg-gray-50',
          cell === 'X' ? 'text-rose-600' : '',
          cell === 'O' ? 'text-sky-600' : '',
        ]"
        :disabled="!!cell || !!winner || currentPlayer === botPlayer"
      >
        {{ cell }}
      </button>
    </div>

    <div
      v-if="!isBoardVisible"
      @click="isBoardVisible = !isBoardVisible"
      class="cursor-pointer mt-4 w-fit flex justify-self-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      PLAY TIC-TAC-TOE
    </div>
    <div
      v-else
      @click="(isBoardVisible = !isBoardVisible), reset()"
      class="cursor-pointer mt-4 w-fit flex justify-self-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      RESET
    </div>
  </section>
</template>

<script lang="ts">
import { computed, ref } from "vue";

type Cell = "" | "X" | "O";

export default {
  components: {},
  setup() {
    const skills = [
      "JavaScript",
      "Vue",
      "React",
      "TailwindCSS",
      "C#",
      "Firebase",
      "Flutterflow",
      "HTML",
      "Figma",
    ];

    const startingPlayer = ref<"X" | "O">("X");
    const currentPlayer = ref<"X" | "O">(startingPlayer.value);
    const board = ref<Cell[]>(Array(9).fill(""));
    const isBoardVisible = ref(false);

    // Bot is always 'O' by default
    const botPlayer: "X" | "O" = "O";

    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // cols
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    const winner = computed<Cell | "">(() => {
      for (const [a, b, c] of winningLines) {
        const v = board.value[a];
        if (v && v === board.value[b] && v === board.value[c]) return v;
      }
      return "";
    });

    const isDraw = computed(
      () => !winner.value && board.value.every((cell) => cell !== "")
    );

    return {
      skills,
      isDraw,
      startingPlayer,
      currentPlayer,
      botPlayer,
      winner,
      board,
      isBoardVisible,
    };
  },

  methods: {
    makeMove(index: number) {
      this.board[index] = this.currentPlayer;
      if (!this.winner) {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    handleClick(index: number) {
      if (
        this.board[index] ||
        this.winner ||
        this.currentPlayer === this.botPlayer
      )
        return;
      this.makeMove(index);
    },
    botMove() {
      // Simple bot: picks random empty cell
      if (this.winner || this.isDraw) return;
      const emptyIndices = this.board
        .map((cell, i) => (cell === "" ? i : -1))
        .filter((i) => i !== -1);
      if (emptyIndices.length > 0) {
        const choice =
          emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        this.makeMove(choice);
      }
    },
    swapStarting() {
      this.startingPlayer = this.startingPlayer === "X" ? "O" : "X";
      this.reset();
    },
    reset() {
      this.board = Array(9).fill("");
      this.currentPlayer = this.startingPlayer;
      if (this.currentPlayer === this.botPlayer) {
        // let bot start
        setTimeout(this.botMove, 300);
      }
    },
  },

  watch: {
    currentPlayer(newVal) {
      if (newVal === this.botPlayer && !this.winner && !this.isDraw) {
        setTimeout(this.botMove, 400);
      }
    },
  },
};
</script>
