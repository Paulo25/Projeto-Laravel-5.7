@extends('../templates.modelo_system')

@section('conteudo')

    <div style="text-align: center; color: #00a7d0;"><h3 style="font-weight: bold">LISTA DE LINGUAGEM DE PROGRAMAÇÃO</h3></div>
    <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <h3>Criar Linguagem <a href="{{route('system.adminController.create')}}">
                    <button class="btn btn-success">Criar</button>
                </a></h3>
            @include('system.search')
        </div>
    </div>
    @if(count($questions))
        <div class="pull-right" style="margin-bottom: 7px;">
            <form action="{{route('system.adminController.export')}}" method="GET" class="export-ajax">
                @csrf
                <button type="submit" class="btn-danger">Exportar <i class="fas fa-file-export"></i> </button>
            </form>
        </div>
    @endif
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-condensed table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMAGEM</th>
                        <th>NOME</th>
                        <th>CONTEÚDO</th>
                        <th>STATUS</th>
                        <th>DATA DE ATUALIZAÇÃO</th>
                        <th>AÇÕES</th>
                    </tr>
                    </thead>
                    @if(count($questions))
                        @foreach ($questions as $question)
                            <tbody>
                            <tr>
                                <td>{{ $question->id}}</td>
                                <td>
                                    @php
                                        $fileName = storage_path('app' .DIRECTORY_SEPARATOR. 'public'.DIRECTORY_SEPARATOR. $question->path_imagem );
                                        $fileName = str_replace('\\','/',$fileName);
                                    @endphp
                                    @if($question->path_imagem)
                                        <img
                                            src="{{route('storage')."?path=". str_replace('\\','/',$question->path_imagem)}}"
                                            width="100px" height="50px">
                                    @else
                                        <img src="{{asset('sem-imagem.jpg')}}" width="100px" height="50px">
                                    @endif
                                </td>
                                <td>{{ $question->nome}}</td>
                                <td>{{mb_strimwidth($question->conteudo, 0, 360, "...")}}</td>
                                <td>{{$question->status == \App\Enums\LinguagemStatus::ATIVO ? 'Ativo' : 'Inativo'}}</td>
                                <td>{{date('d/m/Y', strtotime($question->dt_atualizacao))}}</td>
                                <td>
                                    <a href="{{route('system.adminController.edit', $question->id )}}"
                                       class="action-btn"> <i class="fas fa-edit fa-lg" title="Editar"></i></a>

                                    <a href="{{route('system.adminController.delete', $question->id)}}"
                                       class="action-btn"> <i class="fas fa-trash  fa-lg" title="Excluir"></i></a>
                                </td>
                            </tr>
                            </tbody>
                        @endforeach
                    @else
                        <td colspan="7">
                            <span>Nenhum registro encontrado...</span>
                        </td>
                    @endif
                </table>
            </div>
        </div>
        <nav class="menu">
            <ul>
                @if(isset($filter))
                    {{$questions->appends($filter)->links()}}
                @else
                    {{$questions->render()}}
                @endif
            </ul>
        </nav>
    </div>
@endsection


