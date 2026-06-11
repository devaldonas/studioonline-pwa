import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nome e e-mail são obrigatórios' },
        { status: 400 }
      );
    }

    // Por enquanto, apenas loga
    console.log(`📧 Nova inscrição: ${name} - ${email}`);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    );
  }
}