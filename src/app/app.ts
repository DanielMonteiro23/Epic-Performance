import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  pergunta: string;
  resposta: string;
  aberto: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Depoimentos
  depoimentos: string[] = [
    'depoimento-1.jpeg',
    'depoimento-2.jpeg',
    'depoimento-3.jpeg',
    'depoimento-4.jpeg'
  ];

  currentIndex: number = 0;
  selectedImage: string | null = null;

  // Lista do FAQ
  faqs: FaqItem[] = [
    {
      pergunta: 'Por que fazer uma consultoria em vez de seguir uma dieta pronta?',
      resposta: 'Na consultoria você terá um profissional qualificado te acompanhando durante todo o processo, fazendo todos os ajustes necessários.',
      aberto: false
    },
    {
      pergunta: 'Posso entrar na consultoria mesmo treinando pouco?',
      resposta: 'Sim, você pode entrar na consultoria independentemente do seu nível de treinamento.',
      aberto: false
    },
    {
      pergunta: 'Com que frequência meu plano é ajustado?',
      resposta: 'Sempre que for necessário, não importa quantas vezes.',
      aberto: false
    },
    {
      pergunta: 'Como funciona a avaliação da minha evolução?',
      resposta: 'A avaliação é feita semanalmente por meio de fotos e com atualização do peso corporal.',
      aberto: false
    },
    {
      pergunta: 'E se minha rotina mudar durante a consultoria?',
      resposta: 'Se você tem uma rotina corrida ou precisar mudar ela, a consultoria se adaptará à sua rotina, sem limitações.',
      aberto: false
    }
  ];

  proximoDepoimento(): void {
    this.currentIndex = (this.currentIndex + 1) % this.depoimentos.length;
  }

  depoimentoAnterior(): void {
    this.currentIndex = (this.currentIndex - 1 + this.depoimentos.length) % this.depoimentos.length;
  }

  irParaDepoimento(index: number): void {
    this.currentIndex = index;
  }

  abrirZoom(imagem: string): void {
    this.selectedImage = imagem;
  }

  fecharZoom(): void {
    this.selectedImage = null;
  }

  // Função do FAQ com validação de índice
  toggleFaq(index: number): void {
    if (this.faqs[index]) {
      this.faqs[index].aberto = !this.faqs[index].aberto;
    }
  }
}