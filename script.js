function verificarResposta(perguntaId, escolha) {
    const resultadoDiv = document.getElementById('resultado-quiz');
    resultadoDiv.style.display = 'block';

    if (escolha === 'certo') {
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
        resultadoDiv.style.border = '1px solid #c3e6cb';
        resultadoDiv.innerHTML = '🎉 <strong>Correto!</strong> Investigar antes de compartilhar é a melhor forma de frear a desinformação e exercer sua cidadania digital.';
    } else {
        resultadoDiv.style.backgroundColor = '#f8d7da';
        resultadoDiv.style.color = '#721c24';
        resultadoDiv.style.border = '1px solid #f5c6cb';
        resultadoDiv.innerHTML = '❌ <strong>Ops, resposta errada!</strong> Compartilhar sem checar ajuda a espalhar boatos e deepfakes perigosas. Sempre verifique em fontes confiáveis.';
    }
}
